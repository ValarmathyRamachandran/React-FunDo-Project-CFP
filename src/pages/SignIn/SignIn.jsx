import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import "./SignIn.scss";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailOrPhone: "",
      password: "",
      emailOrPhoneError: false,
      passwordError: false
    };
  }

  validation = () => {
    console.log("in validation");
    let isError = false;
    const error = this.state;
    console.log(error.emailOrPhone);
    error.emailOrPhoneError = this.state.emailOrPhone === "" ? true : false;
    error.passwordError = this.state.password === "" ? true : false;

    this.setState({
      ...error
    });
    return (isError = error.emailOrPhoneError || error.passwordError);
  };

  next = () => {
    var validated = this.validation();
    if (validated) {
      console.log("validation done successfully");
    }
  };

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
              name="emailOrPhone"
              id="SignIn-email-or-phone"
              label="Email or phone"
              variant="outlined"
              placeholder="Email or phone"
              fullWidth
              error={this.state.emailOrPhoneError}
              helperText={
                this.state.emailOrPhoneError
                  ? "Email or Phone number is required"
                  : " "
              }
              onChange={(e) => this.changeHandle(e)}
            />
          </div>
          <div className="SignIn-forgot-email-container">
            <a id="SignIn-forgot-email" href="#">
              Forgot email?
            </a>
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
              <span className="SignIn-create-acct-title">Create account</span>
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
