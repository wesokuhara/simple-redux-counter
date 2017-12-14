import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';

const Counter = ({ actions, counter }) => {
  return (
    <main>
      <p>{counter}</p>
      <button onClick={actions.decrement}>-</button>
      <button onClick={actions.increment}>+</button>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
