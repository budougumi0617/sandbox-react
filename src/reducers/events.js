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
        const events = state.events;
        const result = { ...events, [action.payload.id]: action.payload };
        return { ...state, events: result };
      }
    },
    [UPDATE_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof updateEvent>) {
        const events = state.events;
        const result = { ...events, [action.payload.id]: action.payload };
        return { ...state, events: result };
      }
    },
    [READ_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof readEvent>) {
        const events = state.events;
        const result = { ...events, [action.payload.id]: action.payload };
        return { ...state, events: result };
      }
    },
    [READ_EVENTS]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof readEvents>) {
        return { ...state, events: action.payload };
      }
    },
    [DELETE_EVENT]: {
      next(state: { events: EventMap | {} }, action: ActionType<typeof deleteEvent>) {
        const result = Object.keys(state.events)
          .filter(k => state.events[Number(k)].id !== action.payload.id)
          .reduce((r, c) => {
            r[Number(c)] = state.events[Number(c)];
            return r;
          }, {});
        return { ...state, events: result };
      }
    }
  },
  initialState
);
