export default (state = [], action) => {

  // console.log("reducer is reducing something")
  let quotes = [...state]
    let foundQuote = quotes.find(q => q.id === action.quoteId)

  switch (action.type){

    case 'ADD_QUOTE':
      // console.log("adding quote", action)

      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      
      let remainingQuotes = state.filter( q => q.id !== action.quoteId)
      console.log(remainingQuotes)
      return remainingQuotes


    case 'UPVOTE_QUOTE':
      console.log("reducer is trying")
      // let quotes = [...state]
      // let foundQuote = quotes.find(q => q.id === action.quoteId)
      foundQuote.votes += 1
      console.log(quotes, foundQuote)
      return quotes


      case 'DOWNVOTE_QUOTE':
      if(foundQuote.votes === 0){
        foundQuote.votes = 0
      // console.log(quotes, foundQuote)
      }
      else {
        foundQuote.votes -= 1
      }
    return quotes
      

    default:
      return state
  }


  // return state;
}


