import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = (props) => {
    return (
        <div className="Layout">
            <header className="Layout-header">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="Layout-body">
                {props.children }
            </div>
            <footer>
                <p>THIS WEBSITE IS STILL UNDER DEVELOPMENT!</p>
            </footer>
        </div>
    )
};

export default Layout;