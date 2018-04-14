import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 40px;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: palevioletred;
  margin-top: 0;
`;

const Button = styled.button`
  margin: 10px;
  padding: 0 30px;
  background-color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: white;
  font-size: 2rem;
`;

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <Container>
      <Title>{value}</Title>
      <Button onClick={onDecrement}>-</Button>
      <Button onClick={onIncrement}>+</Button>
    </Container>
  );
};

export default Counter;
