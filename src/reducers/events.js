// @flow

import { handleActions, type ActionType } from 'redux-actions';
import { readEvents, READ_EVENTS } from '../actions';

import type { Action, EventMap } from '../types/Action';

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
      throw(state: { events: EventMap | {} }, action: Action) {
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
//     case READ_EVENTS:
//       return _.mapKeys(action.response.data, 'id');
//     default:
//       return events;
//   }
// };
