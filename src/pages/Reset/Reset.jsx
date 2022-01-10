import React from 'react';
import TextField from '@mui/material/TextField';
import './Reset.css';

const Reset=()=>
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
        <div class="resetPwd-sub-heading"><span>Enter your password</span>
        </div>

        <div className="form-group">
            <TextField id="reset-pwd" label="Reset password" variant="outlined"  placeholder="reset password" size="small"  fullWidth /> 
        </div>
        <div className="form-group">
            <TextField id="confirm-pwd" label="Confirm password" variant="outlined"  placeholder="confirm password" size="small"  fullWidth /> 
        </div>

        <div class="next-container">
            <button type="button" class="next-btn" size="small">Next</button>
        </div>
        </div>
        </form>
        );
    }

    export default Reset;