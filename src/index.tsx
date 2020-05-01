import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';
import App from './Components/Home/App';
import Resume from './Components/Resume/Resume';
import * as serviceWorker from './serviceWorker';
import About from './Components/About/About';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const routing = (
    <Provider store={store}>
        <Router basename={ process.env.PUBLIC_URL }>
            <div>
                <Route path="/" exact component={App} />
                <Route path="/resume" component={Resume} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
