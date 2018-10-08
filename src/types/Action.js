// @flow

const ReadEvents: 'READ_EVENTS' = 'READ_EVENTS';

export type Event = {
  id: number,
  tite: string,
  body: string
};

export type ReadEventsAction = {
  type: typeof ReadEvents,
  payload: { [id: number]: Event }
  //  response: {
  //    data: Object // TODO define Event type
  //  }
};

export type Action = ReadEventsAction;
// export type Action = IncreamentAction | DecrementAction;
