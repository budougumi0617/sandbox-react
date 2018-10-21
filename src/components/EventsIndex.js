// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <td>
          <Link to={`/events/${event.id}`}> {event.title} </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
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
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ events: state.events.events });

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
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
