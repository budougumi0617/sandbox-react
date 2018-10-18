import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import events from './events';

// https://redux.js.org/api/combinereducers
// like a return { events: events }
export default combineReducers({ events, form });
