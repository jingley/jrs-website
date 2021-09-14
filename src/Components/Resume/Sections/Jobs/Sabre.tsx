/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import Job from './Job';

/**
 * Sabre component. Child of Job
 *
 * @constructor
 */
const Sabre = () => {

    /**
     * these are the bullets for the description list
     */
    const bullets = {
        a: `Position was intended to be Java development, but the company’s needs required me to learn powerful
        modern front-end web technologies--<span class="Standout-text">React, Redux, RxJS</span>-- for UI development.`,
        a1: 'Leveraged RallyDevTeams story tracking.',
        a2: `Leveraged BitBucket, <span class="Standout-text">Git</span>, and GitBash for version control and simultaneous team development.`
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
        title: 'Software Developer Intern',
        company: 'Sabre Corporation',
        timeline: 'Summer of 2019',
    };

    return  (
        <Job {...props}/>
    );
};

export default Sabre;