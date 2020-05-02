import React from 'react';
import { Link } from 'react-router-dom';
import './css/Layout.css';
import FontTools from '../FontTools/ConnectFontTools';

export class Layout extends React.Component<any,any> {

    constructor(props) {
        super(props);
        this.state = {
            fontSize : this.props.fontSize
        }
    }

    componentDidMount(): void {
        const {fontSize} = this.props;
        const layout = document.getElementById('Layout-fonts');
        if (layout !== null) {
            layout.style.fontSize = fontSize;
        }
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        const {fontSize} = this.props;
        const layout = document.getElementById('Layout-fonts');
        if (layout !== null) {
            layout.style.fontSize = fontSize;
        }
    }

    responsiveMenu = () => {
        const nav = document.getElementById('myTopnav');
        if (nav !== null && nav.className === 'topnav') {
            nav.className += ' responsive';
        } else if (nav !== null) {
            nav.className = 'topnav';
        }
    }

    render() {
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
                                    <Link to='/files/jon_ross_ingley_resume.pdf' target='_blank' download>
                                        Download PDF
                                    </Link>
                                </div>
                            </div>
                            <Link id="about" to="/about">About Me</Link>
                            <button className="icon" onClick={() => this.responsiveMenu()}>
                                &#9776;
                            </button>
                        </div>
                    </nav>
                </header>
                <div className="Layout-body" id="Layout-fonts">
                    {this.props.children }
                </div>
                <aside className="Layout-aside">
                    <FontTools/>
                </aside>
                <div className="Fill-Space"/>
                <footer className="Layout-footer">
                    <p>Jon Ross Ingley &copy; 2020</p>
                </footer>
            </div>
        );
    };
}