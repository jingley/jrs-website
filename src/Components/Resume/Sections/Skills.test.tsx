/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import {render} from '@testing-library/react';
import Skills from './Skills';
import { shallow } from 'enzyme';

describe('testing skills component for lists', ()=> {
    const wrapper = shallow(< Skills/>);

    it('find coding language list', () => {
        expect(wrapper.find('#coding').length).toEqual(1);
    });
    it('find communication bullet', () => {
        expect(wrapper.find('#communication').length).toEqual(1);
    })
});