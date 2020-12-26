//General imports
import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//Local imports
import Err from './pages/Error/index.jsx';
import Success from './pages/Success/index.jsx';
import LandingPage from './pages/LandingPage/index.jsx'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/error" key="err">
                <Err />
            </Route>
            <Route path="/success" key="success" >
                <Success />
            </Route>
            <Route path="/" key="home" >
                <LandingPage />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
)