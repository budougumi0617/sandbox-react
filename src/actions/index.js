// @flow

import axios from 'axios';

import type { Dispatch, ThunkAction } from '../types';

export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents: void => ThunkAction = (): ThunkAction => async (dispatch: Dispatch) => {
  return await axios
    .get(`${ROOT_URL}/events${QUERYSTRING}`)
    .then(response => dispatch({ type: READ_EVENTS, response }));
};
