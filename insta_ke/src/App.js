import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Register from './components/register/Register'
import Login from './components/login/Login'


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
  }
}

export default App;
