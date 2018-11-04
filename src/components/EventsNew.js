// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, type FormProps } from 'redux-form';
import { Link, type RouterHistory } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { postEvent } from '../actions';

// https://redux-form.com/7.4.2/docs/flow.md/
type Props = {
  postEvent: void => any,
  history: RouterHistory
} & FormProps;

class EventsNew extends Component<Props> {
  constructor(props) {
    super(props);
    (this: any).onSubmit = this.onSubmit.bind(this);
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
  async onSubmit(values: { title: string, body: string }) {
    this.props.postEvent(values);
    this.props.history.push('/');
  }
  render() {
    // pristineはフィールドに入力があるか
    // submittingはsubmitボタンがクリックされたか（連打防止）
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = { margin: 12 };

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
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
        </div>
      </form>
    );
  }
}
const validate = (values: { title: string, body: string }) => {
  const errors = {};
  if (!values.title) errors.title = 'Enter a title, please.';
  if (!values.body) errors.body = 'Enter a body, please.';
  return errors;
};

// FIXME Need dispatch?
const mapDispatchToProps = { postEvent };

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew));
