// @flow

import * as React from 'react';

type Props = {
  onClick: func,
  completed: boolean,
  text: string
};

type State = {};

export default class Todo extends React.Component<Props, State> {
  render() {
    return (
  <li
    onClick={this.props.onClick}
    style={ {
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }}
  >
    {this.props.text}
  </li>
)};
};
