import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as counterActions from 'actions/counterActions';

const Main = styled.main`
  background-color: papayawhip;
  padding: 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: palevioletred;
`;

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.25rem 1.25rem;
  background-color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: white;
  font-size: 1rem;
`;

const Counter = ({ actions, counter }) => {
  return (
    <Main>
      <Title>{counter}</Title>
      <Button onClick={actions.decrement}>-</Button>
      <Button onClick={actions.increment}>+</Button>
    </Main>
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
