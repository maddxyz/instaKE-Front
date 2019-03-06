import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Register from './components/register/Register'
import Login from './components/login/Login'
import Home from './components/home/Home'
import DashBoard from './components/dashboard/DashBoard'
import Wall from './components/wall/Wall'
import Profil from './components/profil/Profil'

import axios from "axios/index";

import AuthService from './services/Auth'

class App extends Component {
    constructor() {
        super();
        this.state = { isLogged: false}
    }
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute  path="/dashboard" component={DashBoard} />
                <PrivateRoute  path="/wall" component={Wall} />
                <PrivateRoute  path="/profil" component={Profil} />
            </div>
        </Router>
    );
  }
}

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>

                AuthService.isAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}
export default App;
