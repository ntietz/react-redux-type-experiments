// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// This should clearly cause a type error.
// Store<*,*> is expected to have the members dispatch, getState(...),
// subscribe(...), and replaceReducer(...).
const store: number = 3;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
