// @flow

import { handleActions, type ActionType } from 'redux-actions';
import {
  POST_EVENT,
  postEvent,
  READ_EVENT,
  readEvent,
  UPDATE_EVENT,
  updateEvent,
  READ_EVENTS,
  readEvents,
  DELETE_EVENT,
  deleteEvent
} from '../actions';

import type { EventMap } from '../types/Action';

const initialState: {
  events: EventMap | {}
} = { events: {} };

export default handleActions(
  {
    [POST_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof postEvent>) {
        console.log(action.payload);
        const events = state.events;
        const result = { ...events, [action.payload.id]: action.payload };
        return { ...state, events: result };
      }
    },
    [UPDATE_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof updateEvent>) {
        console.log('in UPDATE_EVENT handleActions');
        console.log(action.payload);
        const events = state.events;
        const result = { ...events, [action.payload.id]: action.payload };
        return { ...state, events: result };
      }
    },
    [READ_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof readEvent>) {
        console.log('in READ_EVENT handleActions');
        console.log(state);
        console.log(action);
        const events = state.events;
        const result = { ...events, [action.payload.id]: action.payload };
        console.log(result);
        return { ...state, events: result };
      }
    },
    [READ_EVENTS]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof readEvents>) {
        console.log('in READS_EVENTS!');
        console.log(state.events);
        console.log(action);
        return { ...state, events: action.payload };
      }
    },
    [DELETE_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof deleteEvent>) {
        console.log('in DELETE_EVENT handleActions');
        console.log(action);
        delete state.events[action.payload.id];
        console.log({ ...state });
        return { ...state };
      }
    }
  },
  initialState
);

// export default (events: { [id: number]: any } = {}, action: Action) => {
//   switch (action.type) {
//    case CREATE_EVENT:
//    case READ_EVENT:
//    case UPDATE_EVENT:
//      const data = action.response.data
//      return { ...events, [data.id]: data }
//    case READ_EVENTS:
//      return _.mapKeys(action.response.data, 'id')
//    case DELETE_EVENT:
//      delete events[action.id]
//      return { ...events }
//     default:
//       return events;
//   }
// };
