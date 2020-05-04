/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 *
 * This component is the education section of my resume.
 */

import React from 'react';
import logo from '../../../imgs/uga.png';


/**
 * Education component in resume
 *
 * @constructor
 */
const Education = () => {
    /**
     * props
     */
    const props = {
        major: 'Computer Science',
        status: 'Graduating',
        year: 'May 2020',
        degree: 'Bachelor of Science',
        college: 'Franklin College of Arts and Sciences',
        university: 'The University of Georgia',
        gpa: '3.14 out of 4.0',
        relatedCourseWork: `Related Coursework: <span class="Standout-text">Software Engineering</span>, System Programming, <span class="Standout-text">Web Programming</span>,\n` +
            `Software Development, Data Structures, Database Management, Mobile Software\n` +
            `Development, Computer Networks`
    };

    /**
     * destructing props
     */
    const {major, status, year, degree, college, university, gpa, relatedCourseWork} = props;

    return (
        <div className="Education">
            <div className="School-information">
                <h3>{degree} | {university} </h3>
                <h3>{status}, {year} {college}</h3>
            </div>
            <div className="Resume-bullets">
                <ul>
                    <li>GPA: {gpa}</li>
                    <li>Major: {major}</li>
                    <li dangerouslySetInnerHTML={{ __html: relatedCourseWork}}/>
                </ul>
            </div>
            <div className="Resume-img">
                <img src={logo} alt="University of Georgia Logo" />
            </div>
        </div>
    );
};

export default Education;