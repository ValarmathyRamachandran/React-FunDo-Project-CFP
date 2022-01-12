import React, { Component } from "react";
import './ForgotPassword.scss';
import TextField from '@mui/material/TextField';

export default class ForgotPassword extends Component{

    
        constructor(props) {
            super(props);
        
            this.state = {
              forgotpwdEmailOrphone: "",
              forgotpwdEmailOrphoneError: false
              
            };
          }
    
          validation = () => {
            console.log("in validation");
            let isError = false;
            const error = this.state;
            console.log(error.forgotpwdEmailOrphone);
            error.forgotpwdEmailOrphoneError = this.state.forgotpwdEmailOrphone === "" ? true : false;
        
            this.setState({
              ...error
            });
            return (isError = error.forgotpwdEmailOrphoneError );
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
        render(){
            console.log(this.state);
            return (
            <form>
            <div className="forgotPassword-form">
            <h2 className="forgotPassword-fundo-heading" >
                <p id="forgotPassword-blue" >F</p>
                <p id="forgotPassword-red" >u</p>
                <p id="forgotPassword-yellow">n</p>
                <p id="forgotPassword-blue" >d</p>
                <p id="forgotPassword-green">o</p>
                <p id="forgotPassword-red" >o</p>
            </h2>
            <h1 className="forgotPassword-main">Find your email</h1>

            <div className="forgotPwd-sub-heading"><span>Enter your phone number or recovery email</span>
            </div>

            <div className="forgotPasswordform-group">
                <div className="forgotpwd-phoneoremail"> <TextField name="forgotpwdEmailOrphone"  label="Phone number or email" variant="outlined"  placeholder="Phone number or email"  fullWidth
                error={this.state.forgotpwdEmailOrphoneError}
                helperText={
                  this.state.forgotpwdEmailOrphoneError
                    ? "Email or phone number is required"
                    : " "
                }
                onChange={(e) => this.changeHandle(e)} /> </div>
            </div>

            <div className="forgotPasswordnext-container">
                <button type="button" className="forgotPasswordnext-btn" size="small" onClick={this.next}>Next</button>
            </div>
            </div>
            </form>
        );
    }
}


