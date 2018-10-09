// @flow

import { handleActions } from 'redux-actions';
import { READ_EVENTS } from '../actions';

import type { Action } from '../types/Action';

const initialState: {|
  events: { [id: number]: Event }
|} = { events: {} };

export default handleActions(
  {
    [READ_EVENTS]: {
      next(state: any, action: Action) {
        console.log(action);
        return { ...state, events: action.payload };
      },
      throw(state: any, action: Action) {
        console.log('In throw');
        console.log(action);
        return { ...state, events: action.payload };
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
