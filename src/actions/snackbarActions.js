import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from 'actions/actionTypes';

export const openSnackbar = message => {
  return {
    type: OPEN_SNACKBAR,
    payload: { message }
  };
};

export const closeSnackbar = () => {
  return {
    type: CLOSE_SNACKBAR
  };
};
