// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    const keys = Object.keys(this.props.events);
    if (keys.length !== 0) {
      return keys.map(id => (
        <tr key={this.props.events[id].id}>
          <td>{this.props.events[id].id}</td>
          <td>
            <Link to={`/events/${id}`}> {this.props.events[id].title} </Link>
          </td>
          <td>{this.props.events[id].body}</td>
        </tr>
      ));
    } else {
      return;
    }
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
