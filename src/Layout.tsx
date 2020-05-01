import React from 'react';
import { Link } from 'react-router-dom';
import './css/Layout.css';
import FontTools from './Components/FontTools/FontTools';

const Layout = (props) => {

    const menu = () => {
        const dropDown = document.getElementById("drop");
        const about = document.getElementById("about");
        let menu;

        if(dropDown !== null && about != null ) {
            if((menu = document.getElementById('menuOn')) !== null) {
                dropDown.style.display = "inherit";
                about.style.display = "inherit";
                menu.id = 'menuOff';
            } else if ((menu = document.getElementById('menuOff')) !== null) {
                dropDown.style.display = "none";
                about.style.display = "none";
                menu.id = 'menuOn';
            }
        }
    }

    return (
        <div className="Layout">
            <header className="Layout-header">
                <nav>
                    <div className="Nav-right">
                        <Link to="/">Home</Link>
                        <div id="drop" className="Drop-down">
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
                            <Link to='/files/resume.pdf' target='_blank' download>
                                Download PDF
                            </Link>
                        </span>
                        </div>
                        <Link id="about" to="/about">About Me</Link>
                        <p className="icon" id="menuOn" onClick={menu}>
                            <i className="fa fa-bars"></i>
                        </p>
                    </div>
                </nav>
            </header>
            <div className="Layout-body" id="Layout-fonts">
                {props.children }
                <aside className="Layout-aside">
                    <FontTools/>
                </aside>
            </div>
            <footer className="Layout-footer">
                <p>Jon Ross Ingley &copy; 2020</p>
            </footer>
        </div>
    )
};

export default Layout;