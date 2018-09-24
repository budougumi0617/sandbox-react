// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { Action as _Action } from './action';
// import type { State as _State } from './state';

// export type State = _State;
export type Action = _Action;

// type GetState = () => State;

// export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void | Promise<void>;
// ) => Action | Promise<Action>

// type ThunkDispatch<A> = ThunkAction => A;

// https://flow.org/en/docs/types/intersections/
//export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>;
//export type Store = ReduxStore<State, Action>;
