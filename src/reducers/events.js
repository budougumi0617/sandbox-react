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
        return { ...state, [action.payload.id]: action.payload };
      }
    },
    [UPDATE_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof updateEvent>) {
        console.log(action.payload);
        return { ...state, [action.payload.id]: action.payload };
      }
    },
    [READ_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof readEvent>) {
        console.log(action.payload);
        return { ...state, [action.payload.id]: action.payload };
      }
    },
    [READ_EVENTS]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof readEvents>) {
        return { ...state, events: action.payload };
      },
      throw(state: { events: EventMap | {} }, action: ActionType<typeof readEvents>) {
        return { ...state, events: {} };
      }
    },
    [DELETE_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof deleteEvent>) {
        return { events: action.payload };
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
