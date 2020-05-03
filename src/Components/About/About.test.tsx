import About from './About';
import React from 'react';
import { shallow } from 'enzyme';

describe('about tests', () => {
    const wrapper = shallow( <About />);
    it('renders section title', () => {
        expect(wrapper.find('.Section-title').length).toEqual(1);
    });
    it('renders body', () => {
        expect(wrapper.find('.About-body').length).toEqual(1);
    });
});