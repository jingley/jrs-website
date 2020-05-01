/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import Job from './Job';

/**
 * Snelling Clerical Component. Child of Job
 *
 * @constructor
 */
const SnellingClerical = () => {

    /**
     * Bullets for description list
     */
    const bullets = {
        a: 'Continued responsibilities from Student Employee position, ' +
            'while adding additional tasks: maintaining employee records, ' +
            'running the cash register and handling sensitive information.',
        b: 'I also acted as an extension of management from time to time, ' +
            'providing direction for student work stations and training ' +
            'new students.'
    };

    /**
     * props
     */
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