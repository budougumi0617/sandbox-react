// @flow

import _ from 'lodash';
import { READ_EVENTS } from '../actions';

import type { Action } from '../types/Action';

export default (events = {}, action: Action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
};
