import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import './SignIn.css';

export default class SignIn extends Component {
    render() {
        return (
            <form>
                <div class="form">
                <h2 span id="blue">Fundo</h2>
                <h1>Sign in</h1>
                <h3>Use your Google Account</h3>

                <div className="form-group">
                <TextField id="email-or-phone" label="Email or phone" variant="outlined"  placeholder="Email or phone" size="small"  fullWidth /> 
                </div>
                <div class="forgot-email">
                    <a href="#" >Forgot email?</a>

                </div>

                <div class="helper-content">
                Not your computer? Use Guest mode to sign in privately. </div>
                <div><a class="learn-more" href="https://support.google.com/chrome/answer/6130773?hl=en" >Learn more</a>
                </div>

                <button class="create-acct-btn">
                    <div class="create-acct-section">
                        <span class="create-acct-title">Create account</span>
                    </div>
                </button>

                <div class="next-container">
                <button type="button" class="next-btn" size="small">Next</button>
                </div>
                </div>

            </form>
        );
    }
}