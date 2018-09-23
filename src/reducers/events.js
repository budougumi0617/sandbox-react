// @flow

import type { Action } from '../types/Action';

export type State = {
  value: number
};

const initialState = { value: 0 };

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
};
