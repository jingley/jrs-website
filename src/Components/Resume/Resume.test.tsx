/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import Education from './Sections/Education';
import Resume from './Resume';
import { shallow } from 'enzyme';
import Skills from './Sections/Skills';
import Work from './Sections/Work';


describe('testing resume component', () => {
    it('renders Education component', () => {
        const wrapper = shallow(<Resume location={{'state': {'section': 'education'}}}/>);
        expect(wrapper.find(Education).length).toEqual(1);
    });

    it('renders skills component', () => {
        const wrapper = shallow(<Resume location={{'state': {'section': 'skills'}}}/>);
        expect(wrapper.find(Skills).length).toEqual(1);
    });

    it('renders Work component', () => {
        const wrapper = shallow(<Resume location={{'state': {'section': 'work'}}}/>);
        expect(wrapper.find(Work).length).toEqual(1);
    })
});