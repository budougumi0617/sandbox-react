import React from 'react';

import assert from 'power-assert';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.find('.App-header').length, 1);
  });
});
