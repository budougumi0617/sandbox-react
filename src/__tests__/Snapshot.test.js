import React from 'react';
import Todo from '../components/Todo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Todo text="Snapshot" completed="false" />).toJSON();
  expect(tree).toMatchSnapshot();
});
