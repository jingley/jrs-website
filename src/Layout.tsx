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
                        <Link to="/resume">Resume</Link>
                    </div>
                </nav>
            </header>
            <div className="Layout-body">
                {props.children }
            </div>
            <footer className="Layout-footer">
                <p>THIS WEBSITE IS STILL UNDER DEVELOPMENT!</p>
            </footer>
        </div>
    )
};

export default Layout;