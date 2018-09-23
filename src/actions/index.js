// @flow

import axios from 'axios';
import { createAction } from 'redux-actions';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents = createAction('READ_EVENTS', () =>
  axios.get(`${ROOT_URL}/events${QUERYSTRING}`).then(function(response) {
    return response;
  })
);
