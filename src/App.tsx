import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import Layout from './Layout';

const App = () => {
  return (
      <Layout>
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                This is a placeholder home page for my first React App deployed on github pages. This will be my Resume Website! However it is in development still!
            </p>
            </header>
        </div>
      </Layout>
  );
};

export default App;
