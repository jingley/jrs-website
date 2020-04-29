/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
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
        status: 'In Progress',
        year: 'May 2020',
        degree: 'Bachelor of Science',
        college: 'Franklin College of Arts and Sciences',
        university: 'The Univerity of Georgia',
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
                <p>{degree} | {university} </p>
                <p>{status}, {year} {college}</p>
            </div>
            <div className="Resume-bullets">
                <ul>
                    <li>GPA: {gpa}</li>
                    <li>Major: {major}</li>
                    <li dangerouslySetInnerHTML={{ __html: relatedCourseWork}}></li>
                </ul>
            </div>
            <div className="Resume-img">
            <img src={logo} alt="University of Georgia Logo" />
            </div>
        </div>
    );
};

export default Education;