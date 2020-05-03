import React from 'react';
import {shallow} from 'enzyme';
import Layout from './Layout';

describe('layout tests', () => {
    const wrapper = shallow(<Layout/>);
    it('renders navbar', () => {
       expect(wrapper.find('.topnav').length).toBe(1);
   });
    it('renders footer', () => {
        expect(wrapper.find('.Layout-footer').length).toBe(1);
    });
    it('renders body', () => {
        expect(wrapper.find('.Layout-body').length).toBe(1);
    });
});