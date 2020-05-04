/**
 * @author Jon Ross Ingley
 */

import {FontTools} from './FontTools';
import React from 'react';
import { shallow } from 'enzyme';
import {FONT_UP, FONT_DOWN} from './actions/actions';
import {fontUp, fontDown} from './actions/actions';

describe('FontTools testing', () => {
    const wrapper = shallow(<FontTools/>);
    it('should have up button', () => {
        expect(wrapper.find('#up').exists()).toEqual(true);
    });
    it('should have down button', () => {
        expect(wrapper.find('#down').exists()).toEqual(true);
    });
    it('should send font up action on up button press', () => {
       const expectedAction = {
           type: FONT_UP
       };
       expect(fontUp()).toEqual(expectedAction);
    });
    it('should send font down action on button press', () => {
        const expectedAction = {
            type: FONT_DOWN
        };
        expect(fontDown()).toEqual(expectedAction);
    });
});
