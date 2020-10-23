/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('app tests', () => {
  const wrapper = shallow( <App />);
  it('renders img', () => {
    expect(wrapper.find('.App-logo').length).toEqual(1);
  });
  it('renders socials', () => {
    expect(wrapper.find('.Socials').length).toEqual(1);
  })
});