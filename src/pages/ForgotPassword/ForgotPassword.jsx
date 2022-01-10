import React from 'react';
import './ForgotPassword.css';
import TextField from '@mui/material/TextField';

const ForgotPassword=()=>
{
    return (
        <form>
        <div class="form">
        <h2  id="fundo-heading" >
            <p id="blue" style={{color: "#1a73e8"}}>F</p>
            <p id="red" style={{color: "red" }}>u</p>
            <p id="yellow" style={{color: "yellow" }}>n</p>
            <p id="blue" style={{color: "#1a73e8" }}>d</p>
            <p id="green" style={{color: "green" }}>o</p>
            <p id="red" style={{color: "red" }}>o</p>
        </h2>
        <h1>Find your email</h1>
        <div class="forgotPwd-sub-heading"><span>Enter your phone number or recovery email</span>
        </div>

        <div className="form-group">
            <TextField id="forgotpwd-phoneoremail" label="Email or phone" variant="outlined"  placeholder="Phone number or email" size="small"  fullWidth /> 
        </div>

        <div class="next-container">
            <button type="button" class="next-btn" size="small">Next</button>
        </div>
        </div>
        </form>
        );
    }

    export default ForgotPassword;

