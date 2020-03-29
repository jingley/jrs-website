import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a placeholder home page for my first React App deployed on github pages. This will be my Resume Page!
        </p>
        <Link to="/resume">Resume</Link>
      </header>
    </div>
  );
};

export default App;
