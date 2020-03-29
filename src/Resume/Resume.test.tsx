import React from 'react';
import {render} from '@testing-library/react';
import Education from './Sections/Education';
import Resume from './Resume';
import { shallow } from 'enzyme';

it('renders Education component', () => {
    const wrapper = shallow( <Resume />);
    expect(wrapper.find(Education));
});