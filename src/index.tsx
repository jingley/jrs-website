import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';
import App from './Pages/Home/App';
import Resume from './Pages/Resume/Resume';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router basename="/jrs-website">
        <div>
            <Route path="/" exact component={App} />
            <Route path="/resume" component={Resume} />
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
