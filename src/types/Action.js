// @flow

type IncreamentAction = {
  type: 'INCREMENT'
};
type DecrementAction = {
  type: 'DECREMENT'
};

export type Action = IncreamentAction | DecrementAction;
