/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import Education from './Sections/Education';
import Layout from '../Layout/ConnectLayout';
import Skills from './Sections/Skills';
import {Link} from 'react-router-dom'
import Work from './Sections/Work';
import './css/Resume.css'

const Resume = (props) => {

    let section = 'default';
    if(props.location.state !== undefined) {
        section = props.location.state.section;
    }

    switch (section) {
        case 'work' : {
            return (
                <Layout>
                    <div className="Resume">
                        <div className="Section-title"><h1>Work Experience</h1></div>
                        <div className="Resume-body">
                            <Work/>
                        </div>
                        <div className="Next-button">
                            <Link to={{
                                pathname: '/resume',
                                state: {
                                    section: 'skills'
                                }
                            }}>Go back to Skills & Abilities</Link>
                        </div>
                    </div>
                </Layout>
            );
        }
        case 'skills' : {
            return (
                <Layout>
                    <div className="Resume">
                        <header className="Resume-header">
                        </header>
                        <div className="Section-title"><h1>Skills & Technologies</h1></div>
                        <div className="Resume-body">
                            <Skills/>
                        </div>
                        <div className="Next-button">
                            <Link to={{
                                pathname: '/resume',
                                state: {
                                    section: 'work'
                                }
                            }}>Go to Work Experience</Link>
                            <Link to={{
                                pathname: '/resume',
                                state: {
                                    section: 'education'
                                }
                            }}>Go back to Education</Link>
                        </div>
                    </div>
                </Layout>
            );
        }
        default : {
            return(
                <Layout>
                    <div className="Resume">
                        <div className="Resume-body">
                            <header className="Resume-header">
                                <div className="Section-title"><h1>Education</h1></div>
                            </header>
                            <Education/>
                            <div className="Next-button">
                                <Link to={{
                                    pathname: '/resume',
                                    state: {
                                        section: 'skills'
                                    }
                                }}>Go to Skills & Abilities</Link>
                            </div>
                        </div>
                    </div>
                </Layout>
            );
        }
    }
};

export default Resume;
