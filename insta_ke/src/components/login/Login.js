/* The register page is a custom modification of : https://w3layouts.com/tool-sign-in-form-flat-responsive-widget-template/ */

import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


import '../../assets/css/login.css';
import axios from "axios/index";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        const user = {
            username: this.state.username,
            password: this.state.password,
        };

        axios.post(`http://127.0.0.1:4000/api/auth`, { user })
            .then(res => {
                if(res.data.success) {
                    localStorage.setItem('auth_key', res.data.token);

                }

            });

        event.preventDefault();
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

  render() {
    return (
      <div className="Login">
          <h1>InstaKE Login </h1>
          <div className="w3ls-login box box--big">
              {/* form starts here */}
              <form action="#" method="post" onSubmit={this.handleSubmit}>
                  <div className="agile-field-txt">
                      <label> Username</label>
                      <input type="text" name="name" placeholder="Enter User Name" required=""
                             value={this.state.username} onChange={this.handleUsernameChange}/>
                  </div>
                  <div className="agile-field-txt">
                      <label> password</label>
                      <input type="password" name="password" placeholder="Enter Password" required="" id="myInput"
                             value={this.state.password} onChange={this.handlePasswordChange}/>

                      <div className="agile-right">
                          <a href="/forgot_password">forgot password?</a>
                      </div>
                  </div>
                  <div className="w3ls-bot">
                      <div className="switch-agileits">
                          <label className="switch">
                              <input type="checkbox" />
                                  <span className="slider round"></span>
                                  keep me signed in
                          </label>
                      </div>
                  </div>
                  <input type="submit" value="SIGN IN" />
              </form>
          </div>
          {/* //form ends here */}
          {/* copyright */}
          <div className="copy-wthree">
              <p>© 2018 InstaKE . All Rights Reserved | Design by
                  <a href="http://w3layouts.com/" target="_blank" rel="noopener noreferrer">W3layouts</a>
              </p>
          </div>
          {/* //copyright */}
      </div>
    );
  }
}

export default Login;
