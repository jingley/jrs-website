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
            <p>
                This is a placeholder home page for <span className="Standout-text">my React App</span> deployed on github pages. This will be my Resume Website! However it is in development still!
            </p>
            </header>
        </div>
      </Layout>
  );
};

export default App;
