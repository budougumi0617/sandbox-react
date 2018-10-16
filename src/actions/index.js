// @flow

import axios from 'axios';
import _ from 'lodash';
import { createAction } from 'redux-actions';

import type { ReadEventsAction, PostEventAction } from '../types/Action';

export const READ_EVENTS = 'READ_EVENTS';
export const POST_EVENT = 'POST_EVENT';

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
