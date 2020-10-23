/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import Sabre from './Sabre';
import { shallow } from 'enzyme';
import Job from './Job';

describe('Sabre tests', () => {
    const wrapper = shallow(<Sabre/>);

    it('renders a job component', () => {
       expect(wrapper.find(Job).length).toEqual(1);
    });
    it('uses props properly', () => {
        expect(wrapper.find(Job).prop('company')).toBe('Sabre Corporation');
    });
});