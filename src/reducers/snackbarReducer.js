import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from 'actions/actionTypes';

const initialState = {
  isOpen: false,
  message: null
};

const snackbarReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_SNACKBAR:
      return { isOpen: true, message: payload.message };
    case CLOSE_SNACKBAR:
      return { isOpen: false, message: null };
    default:
      return state;
  }
};

export default snackbarReducer;
