import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Button, Modal, Form  } from 'react-bootstrap';

import AuthService from '../../services/Auth';

import axios from "axios/index";
import Navbar from '../navbar/Navbar'


class DashBoard extends Component {
    constructor(props, context) {
        super(props, context);

        this.addPicture = this.addPicture.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.getBase64 = this.getBase64.bind(this);

        this.state = {
            show: false,
            caption: "",
            img: null
        };
    }
    addPicture() {
        this.setState({ show: false });
        console.log(this.state);

        this.getBase64(this.state.img, this.state.caption, this.sendPicture)
    }

    sendPicture(pic, caption) {
        console.log(pic);

        const config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('auth_key')}
        };

        const bodyParameters = {
            img: pic,
            caption: caption
        };

        axios.post(`http://35.193.141.110:4000/api/post_pic`,
            bodyParameters,
            config
        )
            .then(res => {
                if(res.data.success) {
                    console.log("gut");

                }

            });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    getBase64(file, caption, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result, caption);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
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
                <section className="ab-info-main py-md-5 py-4">
                    <div className="container py-md-5 py-4">
                        <h3 className="tittle text-center mb-lg-5 mb-3"><span className="sub-tittle">DashBoard</span> Welcome {AuthService.getUsername()}</h3>
                        <div className="speak">
                            <div className="row mt-lg-5 mt-4">
                                <div className="col-md-12 events-img px-lg-0">
                                    <img src={require("../../assets/img/banner2.jpg")} className="img-fluid" alt="user-image" />
                                </div>
                            </div>
                        </div>
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
                                        <a href="single.html">You want to show the world how attractive you are ?</a>
                                    </h5>
                                    <p>Having a good meal ? A great day with you're friends and you want to tell EVERYONE ? Search no more this is the feature that you need !</p>
                                    <div className="blog-user-info d-flex my-3">
                                    </div>
                                    <Button className="btn blog-btn h_care-bnr-btn" variant="link" onClick={this.handleShow}>
                                        Add Picture
                                    </Button>
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
                                        <a href="single.htmll">Are you the prettier ?</a>
                                    </h5>
                                    <p>You can now easily find out ! By browsing other people pictures !</p>
                                    <div className="blog-user-info d-flex my-3">
                                    </div>
                                    <a href="single.html" className="btn blog-btn h_care-bnr-btn">
                                        I NEED TO KNOW
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
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add A picture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>A picture</Form.Label>
                                <Form.Control type="file" placeholder="Enter email" onChange={(e) => this.state.img = e.target.files[0]}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>A very deep deep caption</Form.Label>
                                <Form.Control as="textarea" rows="3" onChange={(e) => this.state.caption = e.target.value}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.addPicture}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}

export default DashBoard;