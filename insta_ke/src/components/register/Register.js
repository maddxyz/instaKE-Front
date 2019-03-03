/* The register page is a custom modification of : https://w3layouts.com/tool-sign-in-form-flat-responsive-widget-template/ */

import React, { Component } from 'react';

import axios from 'axios';

import '../../assets/css/login.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: "", password2: "", email: "", condition: false};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePassword2Change = this.handlePassword2Change.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        };

        axios.post(`http://127.0.0.1:4000/api/register`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        event.preventDefault();
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
        this.checkUsername();

    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handlePassword2Change(event) {
        this.setState({password2: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    checkUsername() {
        const user = {
            username: this.state.username
        };

        axios.post(`http://127.0.0.1:4000/api/check_username`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }


    render() {
        return (
          <div className="Register">
              <h1>InstaKE Register </h1>
              <div className="w3ls-login box box--big">
                  {/* form starts here */}
                  <form action="#" method="post" onSubmit={this.handleSubmit}>
                      <div className="agile-field-txt">
                          <label> Username</label>
                          <input type="text" value={this.state.username} placeholder="Enter User Name"
                                 required="" onChange={this.handleUsernameChange}/>
                      </div>
                      <div className="agile-field-txt">
                          <label> password</label>
                          <input type="password" value={this.state.password} name="password" placeholder="Enter Password" required="" id="myInput" onChange={this.handlePasswordChange}/>
                      </div>
                      <div className="agile-field-txt">
                          <label> Retype your password</label>
                          <input type="password" value={this.state.password2} name="password2" placeholder="Enter Password" required="" onChange={this.handlePassword2Change}/>
                      </div>
                      <div className="agile-field-txt">
                          <label> email</label>
                          <input type="email" value={this.state.email} name="password2" placeholder="Enter Email" required="" onChange={this.handleEmailChange}/>
                      </div>

                      <div className="w3ls-bot">
                          <div className="switch-agileits">
                              <label className="switch">
                                  <input type="checkbox" />
                                      <span className="slider round"></span>
                                      I accept conditions
                              </label>
                          </div>
                      </div>
                      <input type="submit" value="SIGN UP" />
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

export default Register;
