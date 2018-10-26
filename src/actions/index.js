// @flow

import axios from 'axios';
import _ from 'lodash';
import { createAction } from 'redux-actions';

import type {
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
    // throw new Error('test');
    return _.mapKeys(response.data, 'id');
  })
);

export const postEvent: void => PostEventAction = createAction(POST_EVENT, values =>
  axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values).then(response => {
    return response;
  })
);

export const _putEvent: any => UpdateEventAction = createAction(UPDATE_EVENT, values =>
  axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values).then(response => {
    return response;
  })
);

export const putEvent = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
  dispatch({ type: UPDATE_EVENT, response })
}

// getEvent
export const readEvent: any => ReadEventAction = createAction(READ_EVENT, values =>
  axios.get(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values).then(response => {
    return response;
  })
);

export const getEvent = (id: number) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: READ_EVENT, response })
}

export const _deleteEvent: any => DeleteEventAction = createAction(DELETE_EVENT, values =>
  axios.delete(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`).then(response => {
    return response.data;
  })
);

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: DELETE_EVENT, id })
}
