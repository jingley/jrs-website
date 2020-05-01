/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import './css/App.css';
import Layout from '../Layout/ConnectLayout';

/**
 * App component. this is the homepage component
 * @constructor
 */
const App = () => {
  return (
      <Layout>
        <div className="App">
            <header className="App-header">
            <img src={require('../../imgs/download-removebg-preview.png')} className="App-logo" alt="logo" />
            </header>
            <div className="App-body">
                <p>
                    Hi! I'm Jon Ross Ingley. Welcome to my resume website. It's a simple <span className="Standout-text">React App</span> deployed on github pages.
                </p>
                <p>
                    I am <span className="Standout-text">currently looking</span> for Software Development opportunities-preferably Front-end Web Development with <span className="Standout-text">React</span>. However, I am open to
                    experiences with new technologies.
                </p>
                <p>
                    Please take a look around the cite and contact me with the links below
                </p>
                <div className="Socials">
                    <a id="linked-in" href="https://www.linkedin.com/in/jon-ross-ingley-810989170" rel="noopener noreferrer" target="_blank"><img src={require('../../imgs/LI-In-Bug-BW.png')}/></a>
                    <a id="email" href="mailto:jingley22@gmail.com">@</a>
                </div>
            </div>
        </div>
      </Layout>
  );
};

export default App;
