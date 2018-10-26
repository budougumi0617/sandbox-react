// @flow

const ReadEvents: 'READ_EVENTS' = 'READ_EVENTS';
const ReadEvent: 'READ_EVENT' = 'READ_EVENT';
const PostEvent: 'POST_EVENT' = 'POST_EVENT';
const UpdateEvent: 'UPDATE_EVENT' = 'UPDATE_EVENT';
const DeleteEvent: 'DELETE_EVENT' = 'DELETE_EVENT';

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

export type ReadEventAction = {
  type: typeof ReadEvent,
  payload?: any,
  error?: boolean
};

export type PostEventAction = {
  type: typeof PostEvent,
  payload?: any,
  error?: boolean
};

export type UpdateEventAction = {
  type: typeof UpdateEvent,
  payload?: any,
  error?: boolean
};

export type DeleteEventAction = {
  type: typeof DeleteEvent,
  payload?: any,
  error?: boolean
};

export type Action =
  | ReadEventsAction
  | ReadEventAction
  | PostEventAction
  | UpdateEventAction
  | DeleteEventAction;

export type StandardAction<T, P> =
  | {|
      type: T,
      payload: P,
      error?: false,
      meta?: mixed
    |}
  | {|
      type: T,
      payload: Error,
      error: true,
      meta?: mixed
    |};
