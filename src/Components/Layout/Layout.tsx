/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './css/Layout.css';
import FontTools from '../FontTools/ConnectFontTools';

const Layout = (props) => {

    const responsiveMenu = () => {
        const nav = document.getElementById('myTopnav');
        if (nav !== null && nav.className === 'topnav') {
            nav.className += ' responsive';
        } else if (nav !== null) {
            nav.className = 'topnav';
        }
    }

    return (
        <div className="Layout">
            <header className="Layout-header">
                <nav>
                    <div className="topnav" id="myTopnav">
                        <Link to="/">Home</Link>
                        <div className="dropdown">
                            <button className="dropbtn">Resume</button>
                            <div className="dropdown-content">
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
                                <Link to='/files/jon-ross-ingley-resume.pdf' target='_blank' download>
                                    Download PDF
                                </Link>
                            </div>
                        </div>
                        <Link id="about" to="/about">About Me</Link>
                        <button className="icon" onClick={() => responsiveMenu()}>
                            &#9776;
                        </button>
                    </div>
                </nav>
            </header>
            <div className="Layout-body">
                {props.children }
            </div>
            <aside className="Layout-aside">
                <FontTools fontControllingClass="Layout"/>
            </aside>
            <div className="Fill-Space"/>
            <footer className="Layout-footer">
                <p>Jon Ross Ingley &copy; 2021</p>
            </footer>
        </div>
    );
}

export default Layout;