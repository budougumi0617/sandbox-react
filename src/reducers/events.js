// @flow

import _ from 'lodash';
import { READ_EVENTS } from '../actions';

import type { Action } from '../types/Action';

export type State = {
  value: number
};

export default (events = {}, action: Action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
};
