/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import './css/App.css';
import Layout from '../../Layout';

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
                Hi! I'm Jon Ross Ingley. Welcome to my resume website. It's a simple <span className="Standout-text">React App</span> deployed on github pages. Feel free to look around :)
            </p>
            </div>
        </div>
      </Layout>
  );
};

export default App;
