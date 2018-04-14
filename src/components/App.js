import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Snackbar from './Snackbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from 'actions/counterActions';
import * as snackbarActions from 'actions/snackbarActions';

const Main = styled.main`
  height: 100vh;
  background-color: papayawhip;
  text-align: center;
`;

const App = ({ actions, counter, snackbar }) => {
  const handleIncrement = () => {
    actions.increment();
    actions.openSnackbar('Incremented!');
  };

  const handleDecrement = () => {
    actions.decrement();
    actions.openSnackbar('Decremented!');
  };

  return (
    <Main>
      <Snackbar
        isOpen={snackbar.isOpen}
        message={snackbar.message}
        onClose={actions.closeSnackbar}
      />
      <Counter
        value={counter}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </Main>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter,
    snackbar: state.snackbar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      { ...counterActions, ...snackbarActions },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
