// @flow

const ReadEvents: 'READ_EVENTS' = 'READ_EVENTS';
const PostEvent: 'POST_EVENT' = 'POST_EVENT';

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
  payload?: EventMap | Error,
  error?: boolean
};

export type PostEventAction = {
  type: typeof PostEvent,
  payload?: any,
  error?: boolean
};

export type Action = ReadEventsAction | PostEventAction;

export type ActionT<A: Action, P> = {|
  type: A,
  payload?: P | Error,
  error?: boolean,
  meta?: mixed
|};
