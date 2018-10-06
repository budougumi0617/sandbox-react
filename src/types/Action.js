// @flow

const ReadEvents: 'READ_EVENTS' = 'READ_EVENTS';
export type ReadEventsAction = {
  type: typeof ReadEvents,
  response: Object
  //  response: {
  //    data: Object // TODO define Event type
  //  }
};

export type Action = ReadEventsAction;
// export type Action = IncreamentAction | DecrementAction;
