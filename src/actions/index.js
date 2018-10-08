// @flow

import axios from 'axios';
import _ from 'lodash';
import { createAction } from 'redux-actions';

import type { ReadEventsAction } from '../types/Action';
import type { PromiseAction } from '../types';

export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents: void => ReadEventsAction = createAction(READ_EVENTS, () =>
  axios
    .get(`${ROOT_URL}/events${QUERYSTRING}`)
    .then(response => {
      return _.mapKeys(response.data, 'id');
    })
    .catch(err => {
      console.debug(err);
      return {};
    })
);
// export const readEvents: void => ThunkAction = (): ThunkAction => async (dispatch: Dispatch) => {
//   return await axios
//     .get(`${ROOT_URL}/events${QUERYSTRING}`)
//     .then(response => dispatch({ type: READ_EVENTS, response }));
// };
