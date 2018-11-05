import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CounterActions } from 'store/actionCreators';

class Counter extends Component {
  render() {
    const { number } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={CounterActions.increment}>증가 (+)</button>
        <button onClick={CounterActions.decrement}>감소 (-)</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({ number: state.counter.number })
)(Counter);
