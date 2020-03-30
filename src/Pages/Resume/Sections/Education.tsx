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
        relatedCourseWork: 'Software Engineering, System Programming, Web Programming,\n' +
            'Software Development, Data Structures, Database Management, Mobile Software\n' +
            'Development, Computer Networks'
    };

    const {major, status, year, degree, college, university, gpa, relatedCourseWork} = props;

    return (
        <div className="Education">
            <h2 className="Resume-title">Education</h2>
            <div className="School-information">
                <p>{degree} | {university} </p>
                <p>{status}, {year} {college}</p>
            </div>
            <div className="Resume-bullets">
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