// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/EventsIndex';
import EventsNew from './components/EventsNew';
import EventsShow from './components/EventsShow';
import registerServiceWorker from './registerServiceWorker';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(promiseMiddleware))
    : applyMiddleware(promiseMiddleware);
const store = createStore(reducer, enhancer);

const root = document.getElementById('root');
if (root == null) {
  throw new Error('no pad element');
}

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  root
);
registerServiceWorker();
