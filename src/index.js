// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/EventsIndex';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk));

const root = document.getElementById('root');
if (root == null) {
  throw new Error('no pad element');
}

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  root
);
registerServiceWorker();
