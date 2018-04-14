import { combineReducers } from 'redux';
import counterReducer from 'reducers/counterReducer';
import snackbarReducer from 'reducers/snackbarReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  snackbar: snackbarReducer
});

export default rootReducer;
