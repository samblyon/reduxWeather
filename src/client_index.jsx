import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers/index';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import App from './containers/app';

const logger = createLogger();

const middlewares = [
  logger
];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

const store = window.store = createStoreWithMiddleware(Reducer, preloadedState);

document.addEventListener('DOMContentLoaded', () => {
  console.log('hi');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('main')
  );
});
