/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 *
 * This is the base Job component for my individual jobs.
 */

import React from 'react';

/**
 * Job component constructor. This is the template for the job components and used by children.
 *
 * @param props
 * @constructor
 */
const Job = (props) => {

    const {description, title, company, timeline} = props;

    return (
        <div className="Job">
            <h2 className="Resume-title">{title} | {company} | {timeline}</h2>
            <div className="Resume-bullets" dangerouslySetInnerHTML={{ __html: description}}></div>
        </div>
    );
};

export default Job;