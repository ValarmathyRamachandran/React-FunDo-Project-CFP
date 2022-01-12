import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import './Reset.scss';

export default class Reset extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          resetPassword: "",
          confirmPassword: "",
          resetPasswordError: false,
          confirmPasswordError: false
        };
      }

      validation = () => {
        console.log("in validation");
        let isError = false;
        const error = this.state;
        console.log(error.resetPassword);
        error.resetPasswordError = this.state.resetPassword === "" ? true : false;
        error.confirmPasswordError = this.state.confirmPassword === "" ? true : false;
    
        this.setState({
          ...error
        });
        return (isError = error.resetPasswordError || error.confirmPasswordError);
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
        <div className="form">
        <h2  id="fundo-heading" >
            <p id="blue" style={{color: "#1a73e8"}}>F</p>
            <p id="red" style={{color: "red" }}>u</p>
            <p id="yellow" style={{color: "yellow" }}>n</p>
            <p id="blue" style={{color: "#1a73e8" }}>d</p>
            <p id="green" style={{color: "green" }}>o</p>
            <p id="red" style={{color: "red" }}>o</p>
        </h2>
        <h1>Find your email</h1>
        <div className="resetPwd-sub-heading"><span>Enter your password</span>
        </div>

        <div className="form-group">
            <TextField name="resetPassword" id="reset-pwd" type={"password"} label="Reset password" variant="outlined"  placeholder="reset password" size="small"  fullWidth
            error={this.state.resetPasswordError}
            helperText={
              this.state.resetPasswordError
                ? "Reset Password is required"
                : " "
            }
            onChange={(e) => this.changeHandle(e)} /> 
        </div>
        <div className="form-group">
            <TextField id="confirm-pwd" type={"password"} label="Confirm password" variant="outlined"  placeholder="confirm password" size="small"  fullWidth 
            error={this.state.confirmPasswordError}
            helperText={
              this.state.confirmPasswordError
                ? "Confirm Password is required"
                : " "
            }
            onChange={(e) => this.changeHandle(e)} /> 
        </div>

        <div className="next-container">
            <button type="button" class="next-btn" size="small" onClick={this.next}>Next</button>
        </div>
        </div>
        </form>
        );
    }
}
