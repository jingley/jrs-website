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
        a: `The position was hired for Java development, but I learned, enjoyed and mostly worked with powerful modern frontend web technologies--<span class="Standout-text">React, Redux, RxJS</span>-- to develop a new enterprise UI. `,
        a1: 'We used RallyDevTeams to handle assigning user stories, updating progress, and completion.',
        a2: `Throughout the project, I became very comfortable working with <span class="Standout-text">Git</span> through Windows GitBash to interact with the team’s BitBucket. I used Git in a capacity that 
        I never have had to before for smaller University projects with 1 or a few people working simultaneously. `,
        a3: `For every development, I created <span class="Standout-text">unit tests</span> with Enzyme and Jest to self check my own code before being submitted to code review by my team.`,
        a4: 'We used TeamCity to handle our build management for continuous integration; after these tests passed, we could merge our changes, and await QA’s assessment.',
        b: 'During the last week of my internship, the team was beginning to work on a new Java REST API. The project was hosted and developed in the cloud.',
        b1: 'The API was be deployed as Docker images to guarantee uniform behavior on any host during development.',
        b2: 'I examined the Jenkins pipeline with the team project leader. The project used <span class="Standout-text">Jenkins to automate their CI/CD</span>. The pipeline was triggered by changes to the git branch, ' +
            'and would then run through several stages: ex. compile, build docker images, testing, deployment. Those being predefined within a pipeline yaml file. '
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
            <li>${ bullets.a3 }</li>
            <li>${ bullets.a4 }</li>
            <li>${ bullets.b }</li>
            <li>${ bullets.b1 }</li>
            <li>${ bullets.b2 }</li>
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