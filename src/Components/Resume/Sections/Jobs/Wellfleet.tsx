/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import Job from './Job';

/**
 * Wellfleet component. Child of Job
 *
 * @constructor
 */
const Wellfleet = () => {

    /**
     * these are the bullets for the description list
     */
    const bullets = {
        a: `Responsibilities include developing, debugging, and bug fixing a highly configurable enterprise Java
        application with the Spring framework.`,
        a1: 'EIS Insurance Software',
        a2: `Development stack includes <span class="Standout-text">Java, T-SQL, Liquibase, OpenL, JSF, Spring Framework, EIS Product Factory</span>.`,
        b: 'Own (run, document, and improve) the deployment process through Jenkins pipelines.',
        c: `Primarily agile development process that features: daily scrum meetings, using Jira for story tracking,
and     providing incremental functionality throughout the sprints.`
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
            <li>${ bullets.b }</li>
            <li>${ bullets.c }</li>
        </ul>`,
        title: 'DevOps Engineer, Workplace Benefits',
        company: 'Wellfleet, a Berkshire Hathaway Company',
        timeline: 'January 2021 - Present',
    };

    return  (
        <Job {...props}/>
    );
};

export default Wellfleet;