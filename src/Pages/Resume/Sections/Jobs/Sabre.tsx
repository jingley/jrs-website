import React from 'react';
import Job from './Job';

const Sabre = () => {

    const bullets = {
        a: `Development for new enterprise UI with powerful modern frontend architecture: <span class="Standout-text">React</span>, Redux, and RxJS`,
        a1: 'Exposure to Webpack and Spring',
        a2: `Built <span class="Standout-text">JS unit tests in Jest</span>`,
        b: 'Inspection of workflow from newly developed REST API in Java',
        b1: 'Brief exposure to Docker images, Kubernetes, Spring, and early CI/CD pipeline',
        c: 'Experience with RallyDevTeams, TeamCity, and Bitbucket',
    };

    const props = {
        description: `
        <ul>
            <li>${ bullets.a }</li>
                <ul>
                    <li>${ bullets.a1 }</li>
                    <li>${ bullets.a2 }</li>
                </ul> 
            <li>${ bullets.b }</li>
                <ul>
                    <li>${ bullets.b1 }</li>
                </ul>
            <li>${ bullets.c }</li>
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