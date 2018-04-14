import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 40px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: palevioletred;
  margin-top: 0;
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
