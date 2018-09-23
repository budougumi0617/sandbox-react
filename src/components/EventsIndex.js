// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import * as Actions from '../actions';

import type { Action } from '../types/Action';

type Props = {
  value: number,
  events: Action => any
};

// FIXME Need to move to types directory.
// FIXME Re-edit if add anothor container.
type State = {
  count: {
    value: number
  }
};

class EventsIndex extends Component<Props> {
  renderEvents() {
    return this.props.events.map(event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>{this.renderEvents()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state: State) => ({ value: state.count.value });

const mapDispatchToProps = (dispatch: *) => ({ ...bindActionCreators(Actions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex);
