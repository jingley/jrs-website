import React from 'react';
import {render} from '@testing-library/react';
import Education from './Education';

test('renders education h1', () => {
    const { getByText } = render(<Education />);
    const h1 = getByText(/Education/i);
    expect(h1).toBeInTheDocument();
});

test('renders Education-title', () => {
    const { getByText } = render(<Education />);
    const p = getByText(/Bachelor/i);
    expect(p).toBeInTheDocument();
});

test('renders education list', () => {
    const { getByText } = render(<Education />);
    const list = getByText(/Related Coursework/i);
    expect(list).toBeInTheDocument();
});