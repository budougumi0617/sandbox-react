// @flow

type IncreamentAction = {
  type: 'INCREMENT'
};
type DecrementAction = {
  type: 'DECREMENT'
};

export type Action = IncreamentAction | DecrementAction;

export default class Index {
  static increment() {
    return { type: 'INCREMENT' };
  }

  static decrement() {
    return { type: 'DECREMENT' };
  }
}
