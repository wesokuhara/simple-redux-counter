import { INCREMENT, DECREMENT } from 'actions/actionTypes';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
