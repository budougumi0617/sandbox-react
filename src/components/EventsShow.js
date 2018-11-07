// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, type FormProps } from 'redux-form';
import { Link, type ContextRouter } from 'react-router-dom';
import { readEvent, deleteEvent, updateEvent } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import type { Dispatch } from 'redux';
import type { Event, Action } from '../types/Action';

type Props = {
  onSubmit: Event => any,
  onDeleteClick: void => any,
  deleteEvent: string => any,
  updateEvent: string => any,
  readEvent: string => any
} & ContextRouter &
  FormProps;

class EventsShow extends Component<Props> {
  constructor(props) {
    super(props);
    (this: any).onSubmit = this.onSubmit.bind(this);
    (this: any).onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const id: ?string = this.props.match.params.id;
    if (id) this.props.readEvent(id);
  }

  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error }
    } = field;
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    );
  }

  async onDeleteClick() {
    const id: ?string = this.props.match.params.id;
    if (id) this.props.deleteEvent(id);
    this.props.history.push('/');
  }

  async onSubmit(event: Event) {
    this.props.updateEvent(event);
    this.props.history.push('/');
  }
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = { margin: 12 };
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        {' '}
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>
        <div>
          <RaisedButton
            label="Submit"
            type="submit"
            style={style}
            disabled={pristine || submitting || invalid}
          />
          <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
          <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) errors.title = 'Enter a title, please.';
  if (!values.body) errors.body = 'Enter a body, please.';
  return errors;
};

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    deleteEvent: (id: string) => dispatch(deleteEvent(id)),
    readEvent: (id: string) => dispatch(readEvent(id)),
    updateEvent: (event: Event) => dispatch(updateEvent(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow));
