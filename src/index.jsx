import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers/index';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger'

const logger = createLogger();

const middlewares = [
  logger
];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

window.store = store = createStoreWithMiddleware(Reducer);

document.addEventListener('DOMContentLoaded', () => {
  console.log('hi');
    ReactDOM.render(
      <Provider store={store}>
        <div>{store.getState().toString()}</div>
        </Provider>,
      document.getElementById('main')
  );
});
