/* The register page is a custom modification of : https://w3layouts.com/tool-sign-in-form-flat-responsive-widget-template/ */

import React, { Component } from 'react';

import '../../assets/css/login.css';

class Register extends Component {
  render() {
    return (
      <div className="Register">
          <h1>InstaKE Register </h1>
          <div className="w3ls-login box box--big">
              {/* form starts here */}
              <form action="#" method="post">
                  <div className="agile-field-txt">
                      <label> Username</label>
                      <input type="text" name="pseudo" placeholder="Enter User Name" required="" />
                  </div>
                  <div className="agile-field-txt">
                      <label> password</label>
                      <input type="password" name="password" placeholder="Enter Password" required="" id="myInput" />
                  </div>
                  <div className="agile-field-txt">
                      <label> Retype your password</label>
                      <input type="password" name="password2" placeholder="Enter Password" required="" />
                  </div>
                  <div className="agile-field-txt">
                      <label> email</label>
                      <input type="email" name="password2" placeholder="Enter Email" required="" />
                  </div>
                  {/* script for show password */}
                  {/*<script>
                  function myFunction() {
                  var x = document.getElementById("myInput");
                  if (x.type === "password") {
                      x.type = "text";
                  } else {
                      x.type = "password";
                  }
              }
              </script>*/}
                  {/* //end script */}
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
