import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'index.css';
import Counter from 'containers/Counter';
import rootReducer from 'reducers';

const store = createStore(rootReducer);
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootEl
);
