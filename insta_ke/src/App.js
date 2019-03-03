import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import './assets/css/home.css';
import 'bootstrap/dist/css/bootstrap.css';

import Register from './components/register/Register'
import Login from './components/login/Login'
import Home from './components/home/Home'


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
  }
}

export default App;
