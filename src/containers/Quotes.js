import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {

renderQuotes = () => {
    return this.props.quotes.map( quote => <QuoteCard 
      key={quote.id}
      quote={quote}
      removeQuote={this.props.removeQuote}
      upVote={this.props.upVote}
      downVote={this.props.downVote}
    /> )
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes()}
                {/* TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    upVote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downVote: (quoteId) => dispatch(downvoteQuote(quoteId))
  }
}

const msp = state => {
  return {
    quotes: state.quotes
  }
}
//add arguments to connect as needed
export default connect(msp, mdp)(Quotes);
