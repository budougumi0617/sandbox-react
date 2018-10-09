// @flow

const ReadEvents: 'READ_EVENTS' = 'READ_EVENTS';

export type Event = {
  id: number,
  tite: string,
  body: string
};

export type EventMap = {|
  [id: number]: Event
|};

export type ReadEventsAction = {
  type: typeof ReadEvents,
  payload: EventMap | Error,
  +error?: boolean
  //  response: {
  //    data: Object // TODO define Event type
  //  }
};

export type Action = ReadEventsAction;
// export type Action = IncreamentAction | DecrementAction;

export type ActionT<A: Action, P> = {|
  type: A,
  payload?: P | Error,
  error?: boolean,
  meta?: mixed
|};
