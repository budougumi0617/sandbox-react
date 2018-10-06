// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { readEvents } from '../actions';

import type { ThunkAction } from '../types';

type Props = {
  events: any,
  readEvents: void => ThunkAction
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

        <tbody> {this.renderEvents()} </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = { readEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex);
