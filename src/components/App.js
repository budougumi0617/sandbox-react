// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

import type { Action } from '../actions';

type Props = {
  value: number,
  increment: Action => any,
  decrement: Action => any
};

type State = {
  count: {
    value: number
  }
};

class App extends Component<Props> {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => ({ value: state.count.value });

const mapDispatchToProps = (dispatch: *) => bindActionCreators({ increment, decrement }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
