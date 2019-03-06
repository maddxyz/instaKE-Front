import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';


class Navbar extends Component {


    render() {
        return (
                    <header>
                        <div className="container-fluid px-lg-5 px-3">
                            {/* nav */}
                            <nav className="py-2 d-lg-flex">
                                <div id="logo">
                                    <h1><a className="navbar-brand logo" href="index.html">
                                        <span className="fa fa-camera" aria-hidden="true"></span> InstaZZ
                                    </a></h1>
                                </div>

                                <label for="drop" className="toggle">Menu</label>
                                <input type="checkbox" id="drop" />
                                <ul className="menu ml-auto">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/register">Register</a></li>
                                    <li><a href="/dashboard">DashBoard</a></li>
                                    <li><a href="/profil">Profil</a></li>
                                    <li><a href="/wall">Wall</a></li>
                                </ul>

                            </nav>
                            {/* //nav */}
                        </div>
                    </header>
        );
    }
}

export default Navbar;