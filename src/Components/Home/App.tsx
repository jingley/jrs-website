/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 *
 * this is the homepage of the app.
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
            <img src={require('../../imgs/download-removebg-preview.png')} alt="Spinning Head Shot of JR" className="App-logo"/>
            </header>
            <div className="App-body">
                <p>
                    Hi! I'm Jon Ross Ingley. Welcome to my resume website. It's a simple <span className="Standout-text">React App</span> deployed on github pages.
                </p>
                <p>
                    Please take a look around the site; you can adjust the font size with the tools on the bottom left of the page if necessary.
                    You may also contact me with the links below.
                </p>
                <div className="Socials">
                    <div className="Row-Socials">
                        <a id="github" href="https://github.com/jingley" rel="noopener noreferrer" target="_blank"><img src={require('../../imgs/GitHub-Mark-32px.png')} alt="Git Hub Logo"/></a>
                        <a id="linked-in" href="https://linkedin.com/in/jon-ross-ingley-810989170" rel="noopener noreferrer" target="_blank"><img src={require('../../imgs/LI-In-Bug-BW.png')} alt="LinkedIn Logo"/></a>
                    </div>
                    <div className="Row-Socials">
                        <a id="email" href="mailto:jingley22@gmail.com">@</a>
                    </div>
                </div>
            </div>
        </div>
      </Layout>
  );
};

export default App;
