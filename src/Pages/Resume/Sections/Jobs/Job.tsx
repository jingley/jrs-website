import React from 'react';

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