import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Button, Modal, Form  } from 'react-bootstrap';

import AuthService from '../../services/Auth';

import axios from "axios/index";

import Navbar from '../navbar/Navbar'

class Wall extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            pics: []
        };

        const config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('auth_key')}
        };

        axios.get(`http://35.193.141.110:4000/api/profil`,
            config
        )
            .then(res => {
                console.log(res.data);
                this.setState({pics: res.data});
            });
    }


    render() {
        return (
            <div className="home">
                {/* mian-content */}
                <section className="main-content" id="home">
                    {/* /header */}
                    <Navbar />
                    {/* //header */}
                    {/* /banner-inner */}
                    <div className="page-inner">

                    </div>
                    {/**/}
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Single Page</li>
                    </ol>
                    {/* //banner-inner */}

                </section>
                {/*// mian-content */}
                {/* Gallery */}
                <section className="gallery py-5" id="gallery">
                    <div className="container py-lg-5 py-3">
                        <div className="header py-lg-5 py-3 text-center">
                            <h3 className="tittle mb-lg-3 mb-3"><span className="sub-tittle">Porfile</span> Welcome {AuthService.getUsername()}</h3>
                        </div>
                        <div className="row news-grids text-center">

                            <div className="col-md-4 gal-img">
                                {this.createCol(0)}
                            </div>

                            <div className="col-md-4 gal-img">
                                {this.createCol(1)}
                            </div>

                            <div className="col-md-4 gal-img">
                                {this.createCol(2)}
                            </div>
                        </div>
                    </div>

                    { this.getPops() }

                </section>
                {/* footer */}
                <footer className="footer-content py-sm-5 py-4">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="contact_grid_left">
                            <ul className="list-unstyled row loaction-content">
                                <li className="col-lg-4 address-content-inf-w3ls">
                                    <div className="row">
                                        <div className="col-md-3 text-left">
                                            <span className="fa fa-home"></span>
                                        </div>
                                        <div className="col-md-9 text-left">
                                            <h6>Address</h6>
                                            <p>The company name
                                                <br />New York City. </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="col-lg-4 address-content-inf-w3ls">
                                    <div className="row">
                                        <div className="col-md-3 text-left">
                                            <span className="fa fa-envelope"></span>
                                        </div>
                                        <div className="col-md-9 text-left">
                                            <h6>Email</h6>
                                            <a href="mailto:info@example.com">mail@example.com</a>
                                            <br />
                                            <a href="mailto:info@example.com">mail2@example.com</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 address-content-inf-w3ls">
                                    <div className="row">
                                        <div className="col-md-3 text-left">
                                            <span className="fa fa-phone"></span>
                                        </div>
                                        <div className="col-md-9">
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

    createCol(index) {
        let imgs = [];

        const size = this.state.pics.length;
        console.log(index*Math.floor(size / 3));
        console.log((index + 1)*Math.floor(size / 3));
        for (let i = index*Math.floor(size / 3); i < (index + 1)*Math.floor(size / 3); i++) {
            imgs.push(<a href={"#gal" + i}><img src={this.state.pics[i].img} alt="news image" className="img-fluid"/></a>)
        }

        if(index == 0)
            if(Math.floor(size / 3)*3 != size)
                imgs.push(<a href={"#gal" + Math.floor(size / 3)*3}><img src={this.state.pics[Math.floor(size / 3)*3].img} alt="news image" className="img-fluid"/></a>);

        if(index == 1)
            if(Math.floor(size / 3)*3 == size - 2)
                imgs.push(<a href={"#gal" + (size - 1)}><img src={this.state.pics[size - 1].img} alt="news image" className="img-fluid"/></a>);

        return imgs
    }

    getPops() {
        let imgs = [];

        const size = this.state.pics.length;
        for (let i = 0; i < size; i++) {
            imgs.push(
                <div id={"gal" + i} className="pop-overlay animate">
                    <div className="popup">
                        <img src={this.state.pics[i].img} alt="Popup Image" className="img-fluid" />
                        <p className="mt-4">{this.state.pics[i].description}</p>
                        <a className="close" href="#gallery">&times;</a>
                    </div>
                </div>
            )
        }
        return imgs
    }
}



export default Wall;