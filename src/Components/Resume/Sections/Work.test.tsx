/**
 * @author Jon Ross Ingley
 */

import React from 'react';
import {shallow} from 'enzyme';
import Work from './Work';
import Sabre from './Jobs/Sabre';
import SnellingStudent from './Jobs/SnellingStudent';
import SnellingClerical from './Jobs/SnellingClerical';

describe('work tests', () => {
    const wrapper = shallow(<Work/>);

    it('renders Sabre', () => {
        expect(wrapper.contains(<Sabre/>)).toEqual(true);
    });
    it('renders Snelling Student', () => {
        expect(wrapper.contains(<SnellingStudent/>)).toEqual(true);
    })
    it('renders Snelling clerical', () => {
        expect(wrapper.contains(<SnellingClerical/>)).toEqual(true);
    })
});