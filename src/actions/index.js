// @flow

import axios from 'axios';
import { createAction } from 'redux-actions';

import type {
  Event,
  ReadEventsAction,
  ReadEventAction,
  PostEventAction,
  UpdateEventAction,
  DeleteEventAction
} from '../types/Action';

export const READ_EVENTS = 'READ_EVENTS';
export const READ_EVENT = 'READ_EVENT';
export const POST_EVENT = 'POST_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents: void => ReadEventsAction = createAction(READ_EVENTS, () =>
  // TODO ソースコード見れば良かった。
  // https://github.com/redux-utilities/redux-actions/blob/51de3891278dc03713d917d636f1508c0c80d44f/src/createAction.js#L29-L31
  axios.get(`${ROOT_URL}/events${QUERYSTRING}`).then(response => {
    return response.data.reduce((r, c) => {
      r[c.id] = c;
      return r;
    }, {});
  })
);

export const postEvent: Event => PostEventAction = createAction(POST_EVENT, (event: Event) =>
  axios.post(`${ROOT_URL}/events${QUERYSTRING}`, event).then(response => {
    return response.data;
  })
);

export const updateEvent: Event => UpdateEventAction = createAction(UPDATE_EVENT, (event: Event) =>
  axios.put(`${ROOT_URL}/events/${event.id}${QUERYSTRING}`, event).then(response => {
    return response.data;
  })
);

export const readEvent: string => ReadEventAction = createAction(READ_EVENT, (id: string) =>
  axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`).then(response => {
    return response.data;
  })
);

export const deleteEvent: string => DeleteEventAction = createAction(DELETE_EVENT, (id: string) =>
  axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`).then(response => {
    return response.data;
  })
);
