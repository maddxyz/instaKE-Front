/* The register page is a custom modification of : https://w3layouts.com/tool-sign-in-form-flat-responsive-widget-template/ */

import React, { Component } from 'react';

import '../../assets/css/login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
          <h1>InstaKE Login </h1>
          <div className="w3ls-login box box--big">
              {/* form starts here */}
              <form action="#" method="post">
                  <div className="agile-field-txt">
                      <label> Username</label>
                      <input type="text" name="name" placeholder="Enter User Name" required="" />
                  </div>
                  <div className="agile-field-txt">
                      <label> password</label>
                      <input type="password" name="password" placeholder="Enter Password" required="" id="myInput" />

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
