// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { readEvents } from '../actions';

import type { Dispatch } from 'redux';
import type { Action } from '../types/Action';

type Props = {
  events: any,
  readEvents: void => any
};

class EventsIndex extends Component<Props> {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    // return this.props.events.map(event => (
    return _.map(this.props.events, event => (
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

const mapDispatchToProps = (dispatch: Dispatch<Action>, _props) => {
  return {
    readEvents: function() {
      dispatch(readEvents());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex);
