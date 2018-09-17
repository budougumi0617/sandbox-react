// @flow

type IncreamentAction = {
  type: 'INCREMENT'
};
type DecrementAction = {
  type: 'DECREMENT'
};

export type Action = IncreamentAction | DecrementAction;

export const increment = () => ({ type: 'INCREMENT' });

export const decrement = () => ({ type: 'DECREMENT' });
