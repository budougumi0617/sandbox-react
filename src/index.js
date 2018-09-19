// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

const root = document.getElementById('root');
if (root == null) {
  throw new Error('no pad element');
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
registerServiceWorker();
