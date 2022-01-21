import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import "./SignIn.scss";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import UserService from "../../service/Userservice";

const userService =  new UserService();

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailOrPhoneError: false,
      passwordError: false
    };
  }

  validation = () => {
    console.log("in validation");
    let isError = false;
    const error = this.state;
    console.log(error.email);
    error.emailError = this.state.email === "" ? true : false;
    error.passwordError = this.state.password === "" ? true : false;

    this.setState({
      ...error
    });
    return (isError = error.emailError || error.passwordError);
  };

  next = () => {
    var validated = this.validation();
    if (!validated) {
      console.log("validation done successfully");
    
      let data = {
        email: this.state.email,
        password: this.state.password,
        
      }
      
      userService.SignIn(data)
      .then((response) => {
        console.log(response);
        console.log('success');
        localStorage.setItem("token",response.data.id)
        
        // window.location.href="http://localhost:4200/dashboard";
       
      })
      
      .catch(err => { console.log(err) });
      }
    }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <form>
        <div className="SignIn-form">
          <h2 className="SignIn-fundo-heading">
            <p id="SignIn-blue">F</p>
            <p id="SignIn-red">u</p>
            <p id="SignIn-yellow">n</p>
            <p id="SignIn-blue">d</p>
            <p id="SignIn-green">o</p>
            <p id="SignIn-red">o</p>
          </h2>
          <h1 className="SignIn-heading">Sign in</h1>
          <h3 className="SignIn-subheading">Use your Google Account</h3>

          <div className="SignIn-form-group">
            <TextField
              name="email"
              id="SignIn-email-or-phone"
              label="Email or phone"
              variant="outlined"
              placeholder="Email or phone"
              fullWidth
              error={this.state.emailError}
              helperText={
                this.state.emailError
                  ? "Email or Phone number is required"
                  : " "
              }
              onChange={(e) => this.changeHandle(e)}
            />
          </div>
          <div className="SignIn-forgot-email-container">
            {/* <a id="SignIn-forgot-email" href=" " >Forgot email?</a> */}
            <Link to="/forgotpassword" id="SignIn-forgot-email" >Forgot email?</Link>
          </div>

          <div className="SignIn-form-group">
            <TextField
              name="password"
              id="SignIn-pwd"
              label="Password"
              variant="outlined"
              placeholder="Password"
              type="password"
              fullWidth
              error={this.state.passwordError}
              helperText={
                this.state.passwordError ? "Password is required" : " "
              }
              onChange={(e) => this.changeHandle(e)}
            />
          </div>

          <div className="SignIn-helper-content">
            Not your computer? Use Guest mode to sign in privately.{" "}
          </div>
          <div>
            <a
              className="SignIn-learn-more"
              href="https://support.google.com/chrome/answer/6130773?hl=en"
            >
              Learn more
            </a>
          </div>

          <button className="SignIn-create-acct-btn">
            <div className="SignIn-create-acct-section">
              <Link to ="/signup" className="SignIn-create-acct-title">Create account</Link>
            </div>
          </button>

          <div className="SignIn-next-container">
            <button
              type="button"
              onClick={this.next}
              className="SignIn-next-btn"
              size="small"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default SignIn;
