/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import {render} from '@testing-library/react';
import Education from './Education';
import {shallow} from 'enzyme';

test('renders Education-title', () => {
    const { getByText } = render(<Education />);
    const p = getByText(/University/i);
    expect(p).toBeInTheDocument();
});

test('renders education list', () => {
    const { getByText } = render(<Education />);
    const list = getByText(/Related Coursework/i);
    expect(list).toBeInTheDocument();
});

test('render image', () => {
    const wrapper = shallow(<Education/>);
    expect(wrapper.find('img').exists()).toEqual(true);
})