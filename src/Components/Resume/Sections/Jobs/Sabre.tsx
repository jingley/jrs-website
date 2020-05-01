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
        a: `The position was originally centered around Java development, 
        but I primarily worked with powerful modern front-end web 
        technologies--e.g., <span class="Standout-text">React, Redux, RxJS</span>-- 
        to develop a new enterprise UI.`,
        a1: 'We leveraged RallyDevTeams to handle assigning user stories, ' +
            'updating progress, and completion.',
        a2: `Throughout the project, I became very adept at working with 
        <span class="Standout-text">Git</span> through Windows GitBash, to 
        interact with the team’s BitBucket. 
        I used Git in a capacity never before used during smaller college 
        projects with 1 or a few people working simultaneously.`,
        a3: `For every development, I created <span class="Standout-text">unit tests</span> 
        with Enzyme and Jest to self-check my code prior to code review 
        by my team.`,
        a4: 'We used TeamCity to administer our build management for continuous ' +
            'integration; after these tests passed, we could merge our changes, ' +
            'and await QA’s assessment.',
        b: 'During the last week of my internship, the team was beginning to work on ' +
            'a new Java REST API. This project was being hosted and developed in ' +
            'the cloud.',
        b1: 'The API was deployed as Docker images to guarantee uniform behavior ' +
            'on any host during development.',
        b2: 'I examined the Jenkins pipeline with the team project leader. The project ' +
            'team used <span class="Standout-text">Jenkins to automate its CI/CD</span>. ' +
            'The pipeline was triggered by changes to the git branch, and would then ' +
            'run through several stages: compile, build docker images, testing, deployment.'
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