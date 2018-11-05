import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from 'store/modules/counter';

class Counter extends Component {
  render() {
    const { number, increment, decrement } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increment}>증가 (+)</button>
        <button onClick={decrement}>감소 (-)</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({ number: state.counter.number }),
  (dispatch) => bindActionCreators(counterActions, dispatch)
)(Counter);
