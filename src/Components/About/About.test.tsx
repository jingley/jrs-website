import About from './About';
import React from 'react';
import { shallow } from 'enzyme';

it('renders  component', () => {
    const wrapper = shallow( <About />);
    expect(wrapper.find('p').length).toEqual(1);
});