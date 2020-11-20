import React from 'react';
// import quotes from '../reducers/quotes';

const QuoteCard = (props) => {

  const handleDelete = () => {
    props.removeQuote(props.quote.id)
  }

  const upVoteQuote = () => {
    console.log("upvoting from qCard")
    props.upVote(props.quote.id)
  }

  const downVoteQuote = () => {
    console.log("downvoting from qCard")
    props.downVote(props.quote.id)
  }

  return(
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p>
          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={upVoteQuote}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={downVoteQuote}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {props.quote.votes}
      </div>
    </div>
  </div>
  )
}
// const mdp = dispatch => {
//   return {
//     removeQuote: (quoteId) => dispatch(removeQuote(quoteId))
//   }
// }


export default QuoteCard
