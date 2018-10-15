// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/EventsIndex';
import EventsNew from './components/EventsNew';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

const root = document.getElementById('root');
if (root == null) {
  throw new Error('no pad element');
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);
registerServiceWorker();
