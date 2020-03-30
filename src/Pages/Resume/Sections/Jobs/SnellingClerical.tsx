import React from 'react';
import Job from './Job';

const SnellingClerical = () => {

    const bullets = {
        a: 'Continued responsibilities from entry level position (Student Food Service Worker I) while adding additional tasks: ' +
            'maintaining employee records, running the cash register and handling sensitive information.',
        b: 'I also act as an extension of management from time to time when they\'re busy: providing direction for ' +
            'student work stations and training new students.'
    };

    const props = {
        description: `
        <ul>
            <li>${ bullets.a }</li>
            <li>${ bullets.b }</li>
        </ul>`,
        title: 'Student Office Clerical',
        company: 'Snelling Dining Commons',
        timeline: '2017-2020'
    };

    return (
      <Job {...props}/>
    );
};

export default SnellingClerical;