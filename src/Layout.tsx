import React from 'react';
import { Link } from 'react-router-dom';
import './css/Layout.css';

const Layout = (props) => {
    return (
        <div className="Layout">
            <header className="Layout-header">
                <nav>
                    <div className="Nav-right">
                        <Link to="/">Home</Link>
                        <div className="Drop-down">
                        <Link id="Drop-down-button" to={{
                            pathname: '/resume',
                            state: {
                                section: 'education'
                            }
                        }}>Resume</Link>
                        <span className="Drop-down-resume">
                            <Link to={{
                                pathname: '/resume',
                                state: {
                                    section: 'education'
                                }
                            }}>Education</Link>
                            <Link to={{
                                pathname: '/resume',
                                state: {
                                    section: 'skills'
                                }
                            }}>Skills & Abilities</Link>
                            <Link to={{
                                pathname: '/resume',
                                state: {
                                    section: 'work'
                                }
                            }}>Work Experience</Link>
                        </span>
                        </div>
                        <Link to="/about">About Me</Link>
                    </div>
                </nav>
            </header>
            <div className="Layout-body">
                {props.children }
            </div>
            <footer className="Layout-footer">
                <p>Jon Ross Ingley &copy; 2020</p>
            </footer>
        </div>
    )
};

export default Layout;