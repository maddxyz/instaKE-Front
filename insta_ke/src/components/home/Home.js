import React, { Component } from 'react';

import '../../assets/css/home.css';
import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {
    render() {
        return (
        <div className="home">
            {/* mian-content */}
            <section className="main-content" id="home">
            {/* /header */}
            <header>
                <div className="container-fluid px-lg-5 px-3">
                    {/* nav */}
                    <nav className="py-2 d-lg-flex">
                        <div id="logo">
                            <h1><a className="navbar-brand logo" href="index.html">
                                    <span className="fa fa-camera" aria-hidden="true"></span> Clack
                                </a></h1>
                        </div>

                        <label for="drop" className="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu ml-auto">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li>
                                {/* First Tier Drop Down */}
                                <label for="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                                <a href="#">More Info <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                                <input type="checkbox" id="drop-2" />
                                <ul className="inner-ul">
                                    <li><a href="#gallery">Gallery</a></li>
                                    <li><a href="#stats">Statsts</a></li>
                                    <li><a href="#partners">Partners</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>

                    </nav>
                    {/* //nav */}
                </div>
            </header>
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
                                    <h6>PHOTOGRAPHY</h6>

                                    <h3>Model Photography</h3>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="bg1">
                            <div className="banner-info-wthree">
                                <div className="container">
                                    <h6>PHOTOGRAPHY</h6>
                                    <h3> Art of the Camera</h3>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="bg2">
                            <div className="banner-info-wthree">
                                <div className="container">
                                    <h6>PHOTOGRAPHY</h6>
                                    <h3>Model Photography</h3>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="bg3">
                            <div className="banner-info-wthree">
                                <div className="container">
                                    <h6>PHOTOGRAPHY</h6>
                                    <h3> Art of the Camera</h3>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
                <div className="arrows">
                    <label for="slides_1"></label>
                    <label for="slides_2"></label>
                    <label for="slides_3"></label>
                    <label for="slides_4"></label>
                </div>
                <div className="navigation">
                    <div>
                        <label for="slides_1"></label>
                        <label for="slides_2"></label>
                        <label for="slides_3"></label>
                        <label for="slides_4"></label>
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
        {/*/services */}
        <section className="blog_hcls_w3layouts py-lg-5 py-md-4" id="services">
            <div className="container py-sm-5 py-4">
                <div className="header py-lg-5 py-3 text-center">
                    <h3 className="tittle mb-lg-3 mb-3"><span className="sub-tittle">Latest</span> Services</h3>
                </div>
                <div className="feature-grids row text-center">
                    <div className="col-lg-4">
                        <div className="bottom-gd p-lg-5 p-3">
                            <span className="fa fa-camera" aria-hidden="true"></span>
                            <h3 className="my-4">Urban Exploration</h3>
                            <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bottom-gd2-active p-lg-5 p-3">
                            <span className="fa fa-video-camera" aria-hidden="true"></span>
                            <h3 className="my-4"> Shoot Amazing Films</h3>
                            <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bottom-gd p-lg-5 p-3">
                            <span className="fa fa-camera-retro" aria-hidden="true"></span>
                            <h3 className="my-4">Best Photographer</h3>
                            <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                        </div>
                    </div>

                </div>


            </div>
        </section>
        {/*// services */}
        {/*/counter*/}
        <section className="stats py-lg-5 py-4" id="stats">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md counter-gd-w3ls">
                        <div className="counter">
                            <h3 className="timer count-title count-number">100</h3>
                            <p className="count-text">Support</p>
                        </div>
                    </div>
                    <div className="col-md counter-gd-w3ls">
                        <div className="counter">
                            <h3 className="timer count-title count-number">1700</h3>
                            <p className="count-text">Happy Hours</p>
                        </div>
                    </div>
                    <div className="col-md counter-gd-w3ls">
                        <div className="counter">
                            <h3 className="timer count-title count-number">1200</h3>
                            <p className="count-text">Flims</p>
                        </div>
                    </div>
                    <div className="col-md counter-gd-w3ls">
                        <div className="counter">
                            <h3 className="timer count-title count-number">157</h3>
                            <p className="count-text">Cups of Coffee</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*//counter*/}

        {/*/team */}
        <section className="blog_hcls_w3layouts py-lg-5 py-5" id="team">
            <div className="container py-sm-5 py-4">
                <div className="header py-lg-5 py-3 text-center">
                    <h3 className="tittle mb-lg-3 mb-3"><span className="sub-tittle">Meet Us</span> Our Photo graphers</h3>
                </div>
                <div className="feature-grids row text-center">
                    <div className="col-lg-6 photo-gd">
                        <div className="thumbnail card">
                            <div className="img-event">
                                <img className="list-group-image img-fluid" src={require("../../assets/img/team1.jpg")} alt=""/>
                            </div>
                            <div className="caption card-body p-lg-5 p-3">
                                <h4 className="group card-title inner list-group-item-heading">
                                    Art &amp; Design</h4>
                                <p className="list-group-item-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 photo-gd">
                        <div className="thumbnail card">
                            <div className="img-event">
                                <img className="list-group-image img-fluid" src={require("../../assets/img/team2.jpg")} alt=""/>
                            </div>
                            <div className="caption card-body p-lg-5 p-3">
                                <h4 className="group card-title inner list-group-item-heading">
                                    Art &amp; Design</h4>
                                <p className="list-group-item-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>
        {/*// services */}
        {/* Gallery */}
        <section className="gallery py-5" id="gallery">
            <div className="container py-lg-5 py-3">
                <div className="header py-lg-5 py-3 text-center">
                    <h3 className="tittle mb-lg-3 mb-3"><span className="sub-tittle">Latest</span> Stunning Clacks</h3>
                </div>
                <div className="row news-grids text-center">
                    <div className="col-md-4 gal-img">
                        <a href="#gal1"><img src={require("../../assets/img/1.jpg")} alt="news image" className="img-fluid"/></a>
                        <a href="#gal2"><img src={require("../../assets/img/2.jpg")} alt="news image" className="img-fluid"/></a>

                    </div>

                    <div className="col-md-4 gal-img">
                        <a href="#gal3"><img src={require("../../assets/img/3.jpg")} alt="news image" className="img-fluid"/></a>

                        <a href="#gal4"><img src={require("../../assets/img/4.jpg")} alt="news image" className="img-fluid"/></a>
                    </div>

                    <div className="col-md-4 gal-img">
                        <a href="#gal5"><img src={require("../../assets/img/5.jpg")} alt="news image" className="img-fluid"/></a>
                        <a href="#gal6"><img src={require("../../assets/img/6.jpg")} alt="news image" className="img-fluid"/></a>
                    </div>
                </div>
            </div>
            {/* popup*/}
            <div id="gal1" className="pop-overlay animate">
                <div className="popup">
                    <img src={require("../../assets/img/1.jpg")} alt="Popup Image" className="img-fluid" />
                    <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
            {/* //popup */}

            {/* popup*/}
            <div id="gal2" className="pop-overlay animate">
                <div className="popup">
                    <img src={require("../../assets/img/2.jpg")} alt="Popup Image" className="img-fluid" />
                    <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
            {/* //popup */}
            {/* popup*/}
            <div id="gal3" className="pop-overlay animate">
                <div className="popup">
                    <img src={require("../../assets/img/3.jpg")} alt="Popup Image" className="img-fluid" />
                    <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
            {/* //popup3 */}
            {/* popup*/}
            <div id="gal4" className="pop-overlay animate">
                <div className="popup">
                    <img src={require("../../assets/img/4.jpg")} alt="Popup Image" className="img-fluid" />
                    <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
            {/* //popup */}
            {/* popup*/}
            <div id="gal5" className="pop-overlay animate">
                <div className="popup">
                    <img src={require("../../assets/img/5.jpg")} alt="Popup Image" className="img-fluid" />
                    <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
            {/* //popup */}
            {/* popup*/}
            <div id="gal6" className="pop-overlay animate">
                <div className="popup">
                    <img src={require("../../assets/img/6.jpg")} alt="Popup Image" className="img-fluid" />
                    <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
            {/* //popup */}
        </section>
        {/*// gallery */}
        {/* blog */}
        <section className="blog_hcls_w3layouts py-lg-5 py-md-4" id="posts">
            <div className="container py-sm-5 py-4">
                <div className="header py-lg-5 py-3 text-center">
                    <h3 className="tittle mb-lg-3 mb-3"><span className="sub-tittle">Latest</span> Blog Posts</h3>
                </div>
                <div className="row mt-4">
                    {/* blog grid */}
                    <div className="col-lg-10  mt-lg-5 mt-4 mx-auto">
                        <div className="card flex-row">
                            <div className="card-header p-0 position-relative">
                                <a href="single.html">
                                    <img className="card-img-bottom rounded-circle img-thumbnail" src={require("../../assets/img/t3.jpg")} alt="Card image cap"/>
                                    <span className="fa fa-user post-icon bg-theme" aria-hidden="true"></span>

                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="blog-title card-title font-weight-bold">
                                    <a href="single.html">Lorem Ipsum Dolor Sit Amet</a>
                                </h5>
                                <p>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,sed diam nonumy.</p>
                                <div className="blog-user-info d-flex my-3">
                                    <label className=""> <span className="fa fa-user mr-3"></span> Admin</label>
                                    <label className="mx-3"> <span className="fa fa-clock-o mr-3"></span> 08:35 PM</label>
                                    <label className=""> <span className="fa fa-calendar mr-3"></span> 08.10.2019</label>
                                </div>
                                <a href="single.html" className="btn blog-btn h_care-bnr-btn">
                                    Read more
                               </a>
                            </div>
                        </div>
                    </div>
                    {/* //blog grid */}
                    {/* blog grid */}
                    <div className="col-lg-10  mt-lg-5 mt-4 mx-auto">
                        <div className="card flex-row">
                            <div className="card-header p-0 position-relative">
                                <a href="single.html">
                                    <img className="card-img-bottom rounded-circle img-thumbnail" src={require("../../assets/img/t1.jpg")} alt="Card image cap"/>
                                    <span className="fa fa-user post-icon bg-theme" aria-hidden="true"></span>

                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="blog-title card-title font-weight-bold">
                                    <a href="single.htmll">Lorem Ipsum Dolor Sit Amet</a>
                                </h5>
                                <p>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,sed diam nonumy.</p>
                                <div className="blog-user-info d-flex my-3">
                                    <label className=""> <span className="fa fa-user mr-3"></span> Admin</label>
                                    <label className="mx-3"> <span className="fa fa-clock-o mr-3"></span> 08:35 PM</label>
                                    <label className=""> <span className="fa fa-calendar mr-3"></span> 08.10.2019</label>
                                </div>
                                <a href="single.html" className="btn blog-btn h_care-bnr-btn">
                                    Read more
                               </a>
                            </div>
                        </div>
                    </div>
                    {/* //blog grid */}
                    {/* blog grid */}
                    <div className="col-lg-10 my-lg-5 my-4 mx-auto">
                        <div className="card flex-row">
                            <div className="card-header p-0 position-relative">
                                <a href="single.html">
                                    <img className="card-img-bottom rounded-circle img-thumbnail" src={require("../../assets/img/t2.jpg")} alt="Card image cap"/>
                                    <span className="fa fa-user post-icon bg-theme" aria-hidden="true"></span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="blog-title card-title font-weight-bold">
                                    <a href="single.html">Lorem Ipsum Dolor Sit Amet</a>
                                </h5>
                                <p>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,sed diam nonumy.</p>
                                <div className="blog-user-info d-flex my-3">
                                    <label className=""> <span className="fa fa-user mr-3"></span> Admin</label>
                                    <label className="mx-3">  <span className="fa fa-clock-o mr-3"></span> 08:35 PM</label>
                                    <label className=""> <span className="fa fa-calendar mr-3"></span> 08.10.2019</label>
                                </div>
                                <a href="single.html" className="btn blog-btn h_care-bnr-btn">
                                    Read more
                               </a>
                            </div>
                        </div>
                    </div>
                    {/* //blog grid */}
                    {/* pop-blog */}

                    {/* //pop-blog */}
                </div>
            </div>
        </section>
        {/* //blog */}
        {/* partners */}
        <section className="partners py-md-5 py-4" id="partners">
            <div className="container pb-xl-5">
                <div className="header pb-lg-5 py-3 text-center">
                    <h3 className="tittle mb-lg-3 mb-3"><span className="sub-tittle">Find Us</span> Our Partners</h3>
                </div>
                <div className="row grid-part text-center pb-lg-3">
                    <div className="col-sm-2 col-4">
                        <div className="parts-w3ls">
                            <a href="#"><span className="fa fa-angellist"></span></a>
                        </div>
                    </div>
                    <div className="col-sm-2 col-4">
                        <div className="parts-w3ls">
                            <a href="#"><span className="fa fa-opencart"></span></a>
                        </div>
                    </div>
                    <div className="col-sm-2 col-4">
                        <div className="parts-w3ls">
                            <a href="#"><span className="fa fa-lastfm"></span></a>
                        </div>
                    </div>
                    <div className="col-sm-2 col-4 mt-sm-0 mt-3">
                        <div className="parts-w3ls">
                            <a href="#"><span className="fa fa-openid"></span></a>
                        </div>
                    </div>
                    <div className="col-sm-2 col-4 mt-sm-0 mt-3">
                        <div className="parts-w3ls">
                            <a href="#"><span className="fa fa-skyatlas"></span></a>
                        </div>
                    </div>
                    <div className="col-sm-2 col-4 mt-sm-0 mt-3">
                        <div className="parts-w3ls">
                            <a href="#"><span className="fa fa-ravelry"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //partners */}

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