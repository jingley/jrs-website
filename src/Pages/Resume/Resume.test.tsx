import React from 'react';
import {render} from '@testing-library/react';
import Education from './Sections/Education';
import Resume from './Resume';
import { shallow } from 'enzyme';
import Skills from './Sections/Skills';


describe('testing resume component', () => {
    const wrapper = shallow( <Resume />);

    it('renders Education component', () => {
        expect(wrapper.find(Education).length).toEqual(1);
    });

    it('renders skills component', () => {
        expect(wrapper.find(Skills).length).toEqual(1);
    });
});