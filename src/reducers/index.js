import { combineReducers } from 'redux';
import events from './events';

// https://redux.js.org/api/combinereducers
// like a return { events: events }
export default combineReducers({ events });
