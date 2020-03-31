/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('renders  component', () => {
  const wrapper = shallow( <App />);
  expect(wrapper.find('p').length).toEqual(1);
});