import React from 'react';

const Education = () => {
    const props = {
        major: 'Computer Science',
        status: 'In Progress',
        year: 'May 2020',
        degree: 'Bachelor of Science',
        college: 'Franklin College of Arts and Sciences',
        university: 'The Univerity of Georgia',
        gpa: '3.14 out of 4.0',
        relatedCourseWork: 'Software Engineering(A), System Programming(B+), Web Programming(A),\n' +
            'Software Development(B), Data Structures(A-), Database Management (A-), Mobile Software\n' +
            'Development (B), Computer Networks (In-Progress)'
    };

    const {major, status, year, degree, college, university, gpa, relatedCourseWork} = props;

    return (
        <div className="Education">
            <h1>Education</h1>
            <div className="Education-Title">
                <p>{degree} | {university} |</p>
                <p>{status}, {year} {college}</p>
            </div>
            <div className="Education-Bullets">
                <ul>
                    <li>GPA: {gpa}</li>
                    <li>Major: {major}</li>
                    <li>Related Coursework: {relatedCourseWork}</li>
                </ul>
            </div>
        </div>
    );
};

export default Education;