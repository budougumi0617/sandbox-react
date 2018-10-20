// @flow

import { handleActions, type ActionType } from 'redux-actions';
import { readEvents, READ_EVENTS } from '../actions';

import type { EventMap } from '../types/Action';

const initialState: {
  events: EventMap | {}
} = { events: {} };

export default handleActions(
  {
    [READ_EVENTS]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof readEvents>) {
        console.log(action);
        return { ...state, events: action.payload };
      },
      throw(state: { events: EventMap | {} }, action: ActionType<typeof readEvents>) {
        console.log('In throw');
        console.log(action);
        return { ...state, events: {} };
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
