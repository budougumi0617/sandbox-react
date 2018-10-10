// @flow

import type { Action as _Action } from './action';

export type Action = _Action;

export type PromiseAction<R> = { type: string, payload: Promise<R> };
export type PromiseDispatch = <R>(action: PromiseAction<R>) => Promise<R>;
export type PlainDispatch<A: { type: $Subtype<string> }> = (action: A) => A;
/* NEW: Dispatch is now a combination of these different dispatch types */
export type Dispatch<A> = PlainDispatch<A> & PromiseDispatch;

declare type Reducer<S, A> = (state: S, action: A) => S;

// https://flow.org/en/docs/types/intersections/
declare type Store<S, A> = {
  // rewrite MiddlewareAPI members in order to get nicer error messages (intersections produce long messages)
  dispatch: Dispatch<S, A>,
  getState(): S,
  subscribe(listener: () => void): () => void,
  replaceReducer(nextReducer: Reducer<S, A>): void
};
