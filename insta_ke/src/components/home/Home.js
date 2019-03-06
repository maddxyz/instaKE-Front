import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/home.css';

import Navbar from '../navbar/Navbar'

class Home extends Component {


    render() {
        return (
        <div className="home">
            {/* mian-content */}
            <section className="main-content" id="home">
            {/* /header */}
            <Navbar />
            {/* //header */}

            <div className="csslider infinity" id="slider1">
                <input type="radio" name="slides" checked="checked" id="slides_1" />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />
                <input type="radio" name="slides" id="slides_4" />
                <ul>
                    <li>
                        <div id="bg">
                            <div className="banner-info-wthree">
                                <div className="container">
                                    <h6>InstaZZ</h6>

                                    <h3>The best Instagram So far</h3>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="bg1">
                            <div className="banner-info-wthree">
                                <div className="container">
                                    <h6>InstaZZ</h6>
                                    <h3> The best Instagram So far</h3>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
                <div className="arrows">
                    <label for="slides_1"></label>
                    <label for="slides_2"></label>
                </div>
                <div className="navigation">
                    <div>
                        <label for="slides_1"></label>
                        <label for="slides_2"></label>
                    </div>
                </div>
            </div>

            {/* //banner */}

        </section>
        {/*// mian-content */}
        {/*/ about */}
        <section className="about py-5" id="about">
            <div className="container py-3">
                <div className="header py-lg-5 py-3 text-center">
                    <h3 className="tittle mb-lg-3 mb-3"><span className="sub-tittle">Few words</span> About Us</h3>
                </div>
                <div className="row about-grids mt-lg-5">
                    <div className="col-lg-6 ab-info">
                        <h3 className="mb-3">Hello, We Are Profesional PHOTOGRAPHER
                        </h3>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis.At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,sed diam nonumy.

                        </p>

                    </div>
                    <div className="col-lg-6 ab-img">

                    </div>

                </div>
            </div>
        </section>
        {/*// about */}

        {/* contact */}
        <section className="contact py-5">
            <div className="container">
                <div className="header py-lg-5 py-3">
                    <h3 className="tittle text-left mb-lg-3 mb-3"><span className="sub-tittle">Say Hello</span> SUBSCRIBE NOW</h3>
                </div>
                <div className="contact-form mx-auto text-left pb-3">
                    <form id="contactform" method="post" action="#">
                        <div className="row">
                            <div className="col-lg-4 con-gd-w3layouts">
                                <div className="form-group">
                                    <label>Name *</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"/>
                                </div>
                            </div>
                            <div className="col-lg-4 con-gd-w3layouts">
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input type="email" className="form-control" id="name" placeholder="Enter Email" name="email"/>
                                </div>
                            </div>
                            <div className="col-lg-4 con-gd-w3layouts">
                                <div className="form-group">
                                    <label>Subscribe *</label>
                                    <button type="submit" className="btn btn-default">Subscribe</button>
                                </div>
                            </div>

                        </div>

                    </form>
                </div>

            </div>

        </section>
        {/* //contact */}

        {/* footer */}
        <footer className="footer-content py-sm-5 py-4">
            <div className="container py-xl-5 py-lg-3">
                <div className="contact_grid_left">
                    <ul className="list-unstyled row loaction-content">
                        <li className="col-lg-4 address-content-inf-w3ls">
                            <div className="row">
                                <div className="col-md-3 icon-left">
                                    <span className="fa fa-home"></span>
                                </div>
                                <div className="col-md-9 icon-right">
                                    <h6>Address</h6>
                                    <p>The company name
                                        <br/>New York City. </p>
                                </div>
                            </div>
                        </li>

                        <li className="col-lg-4 address-content-inf-w3ls">
                            <div className="row">
                                <div className="col-md-3 icon-left">
                                    <span className="fa fa-envelope"></span>
                                </div>
                                <div className="col-md-9 icon-right">
                                    <h6>Email</h6>
                                    <a href="mailto:info@example.com">mail@example.com</a>
                                    <br/>
                                    <a href="mailto:info@example.com">mail2@example.com</a>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 address-content-inf-w3ls">
                            <div className="row">
                                <div className="col-md-3 icon-left">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="col-md-9 icon-right">
                                    <h6>Phone Number</h6>
                                    <p>+ 1234567890</p>
                                    <p>+ 0987654321</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>

                <div className="logo-2 text-center mt-4">
                    <h2><a className="logo" href="index.html"><span className="fa fa-camera" aria-hidden="true"></span> Clack</a></h2>
                </div>
                {/* social icons footer */}
                <div className="w3ls-footer text-center mt-4">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">
                                <span className="fa fa-facebook-f"></span>
                            </a>
                        </li>
                        <li className="mx-1">
                            <a href="#">
                                <span className="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa fa-dribbble"></span>
                            </a>
                        </li>
                        <li className="ml-1">
                            <a href="#">
                                <span className="fa fa-vk"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* copyright */}
                <p className="copy-right-grids text-li text-center my-sm-4 my-4">© 2019 Clack. All Rights Reserved | Design by
                    <a href="http://w3layouts.com/"> W3layouts </a>
                </p>
                <div className="top_move text-center">
                    <a href="#home" className="move-top"><span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a>
                </div>
                {/* //copyright */}
            </div>
        </footer>
        {/* footer */}
     </div>

    );
  }
}

    export default Home;