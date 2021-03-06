// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
      return keys.map(id => {
        const event = this.props.events[id];
        return (
          <TableRow key={event.id}>
            <TableRowColumn>{event.id}</TableRowColumn>
            <TableRowColumn>
              <Link to={`/events/${id}`}> {event.title} </Link>
            </TableRowColumn>
            <TableRowColumn>{event.body}</TableRowColumn>
          </TableRow>
        );
      });
    } else {
      return;
    }
  }

  render() {
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12
    };
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>{this.renderEvents()}</TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });

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
