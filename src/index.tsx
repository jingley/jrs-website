import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';
import App from './Components/Home/App';
import Resume from './Components/Resume/Resume';
import * as serviceWorker from './serviceWorker';
import About from './Components/About/About';

const routing = (
    <Router basename={ process.env.PUBLIC_URL }>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/resume" component={Resume} />
            <Route path="/about" component={About} />
        </div>
    </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
