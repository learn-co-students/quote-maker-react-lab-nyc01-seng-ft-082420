import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

const Quotes = props => {
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
            {props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} removeQuote={props.removeQuote} upvoteQuote={props.upvoteQuote} downvoteQuote={props.downvoteQuote} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId))
  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
