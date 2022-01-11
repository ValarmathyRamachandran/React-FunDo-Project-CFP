import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import './SignIn.scss';

export default class SignIn extends Component {
    render() {
        return (
            <form>
            <div className="SignIn-form">
            <h2  className="SignIn-fundo-heading" >
            <p id="SignIn-blue">F</p>
            <p id="SignIn-red">u</p>
            <p id="SignIn-yellow">n</p>
            <p id="SignIn-blue">d</p>
            <p id="SignIn-green">o</p>
            <p id="SignIn-red" >o</p>
            </h2>
                <h1 className="SignIn-heading">Sign in</h1>
                <h3 className="SignIn-subheading">Use your Google Account</h3>

                <div className="SignIn-form-group">
                <TextField id="SignIn-email-or-phone" label="Email or phone" variant="outlined"  placeholder="Email or phone"   fullWidth /> 
                </div>
                <div className="SignIn-forgot-email-container">
                < a id ="SignIn-forgot-email" href="#" >Forgot email?</a>
                </div>

                <div className="SignIn-form-group">
                <TextField id="SignIn-pwd" label="Password" variant="outlined"  placeholder="Password"  fullWidth /> 
                </div>

                <div class="SignIn-helper-content">
                Not your computer? Use Guest mode to sign in privately. </div>
                <div><a className="SignIn-learn-more" href="https://support.google.com/chrome/answer/6130773?hl=en" >Learn more</a>
                </div>

                <button class="SignIn-create-acct-btn">
                    <div class="SignIn-create-acct-section">
                        <span class="SignIn-create-acct-title">Create account</span>
                    </div>
                </button>

                <div className="SignIn-next-container">
                <button type="button" className="SignIn-next-btn" size="small">Next</button>
                </div>
                </div>

            </form>
        );
    }
}