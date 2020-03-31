/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import Job from './Job';

/**
 * SnellingStudent Component. Child of Job.
 *
 * @constructor
 */
const SnellingStudent = () => {

    /**
     * Bullets for description list
     */
    const bullets = {
        a: 'Acquired skills in customer service, teamwork, communication, time management, and multitasking.',
        a1: 'Rookie of the Month - August 2015',
        a2: 'Outstanding Customer Service - September 2016'
    };

    /**
     * props
     */
    const props = {
        description: `
        <ul>
            <li>${ bullets.a }</li>
            <li>${ bullets.a1 }</li>
            <li>${ bullets.a2 }</li>
        </ul>`,
        title: 'Student Food Service Worker I',
        company: 'Snelling Dining Commons',
        timeline: '2015-2017'
    };

    return (
        <Job {...props} />
    );
};

export default SnellingStudent;