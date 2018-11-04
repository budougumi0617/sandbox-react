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

const initialState: EventMap | {} = {};

export default handleActions(
  {
    [POST_EVENT]: {
      next(events: EventMap | {}, action: ActionType<typeof postEvent>) {
        return { ...events, [action.payload.id]: action.payload };
      }
    },
    [UPDATE_EVENT]: {
      next(events: EventMap | {}, action: ActionType<typeof updateEvent>) {
        return { ...events, [action.payload.id]: action.payload };
      }
    },
    [READ_EVENT]: {
      next(events: EventMap | {}, action: ActionType<typeof readEvent>) {
        return { ...events, [action.payload.id]: action.payload };
      }
    },
    [READ_EVENTS]: {
      next(events: EventMap | {}, action: ActionType<typeof readEvents>) {
        return action.payload;
      }
    },
    [DELETE_EVENT]: {
      next(events: EventMap | {}, action: ActionType<typeof deleteEvent>) {
        const results = Object.keys(events)
          .filter(k => events[Number(k)].id !== action.payload.id)
          .reduce((r, c) => {
            r[Number(c)] = events[Number(c)];
            return r;
          }, {});
        return { ...results };
      }
    }
  },
  initialState
);
