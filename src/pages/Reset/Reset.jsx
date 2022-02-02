import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import './Reset.scss';
import UserService from "../../service/Userservice";
import { Link } from "react-router-dom";


const userService =  new UserService();

export default class Reset extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          newPassword: "",
          confirmPassword: "",
          newPasswordError: false,
          confirmPasswordError: false
        };
      }

      validation = () => {
        console.log("in validation");
        let isError = false;
        const error = this.state;
        console.log(error.resetPassword);
        error.newPasswordError = this.state.newPassword === "" ? true : false;
        error.confirmPasswordError = this.state.confirmPassword === "" ? true : false;
    
        this.setState({
          ...error
        });
        return (isError = error.newPasswordError || error.confirmPasswordError);
      };
    
      next = () => {
        var validated = this.validation();
        if (!validated) {
          console.log("validation done successfully");
          if(this.state.newPassword === this.state.confirmPassword){
        
          let data = {
          "newPassword": this.state.confirmPassword
          // confirmPassword: this.state.confirmPassword,
          }
        userService.Reset(data)
        .then((response) => {
          console.log(response);
          console.log('success');  
         
          localStorage.setItem('token',response.data.id)
        })
        .catch(err => { console.log(err) });
        }
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
        <div className="reset-form">
        <h2  id="reset-fundo-heading" >
            <p id="blue" style={{color: "#1a73e8"}}>F</p>
            <p id="red" style={{color: "red" }}>u</p>
            <p id="yellow" style={{color: "yellow" }}>n</p>
            <p id="blue" style={{color: "#1a73e8" }}>d</p>
            <p id="green" style={{color: "green" }}>o</p>
            <p id="red" style={{color: "red" }}>o</p>
        </h2>
        <h1 className="reset-maintext">Find your email</h1>
        <div className="resetPwd-sub-heading"><span>Enter your password</span>
        </div>

        <div className="form-group">
            <div className="reset-password" ><TextField name="newPassword" id="reset-pwd" type={"password"} label="Reset password" variant="outlined"  placeholder="reset password" size="small"  fullWidth
            error={this.state.newPasswordError}
            helperText={
              this.state.newPasswordError
                ? "Reset Password is required"
                : " "
            }
            onChange={(e) => this.changeHandle(e)} /> </div>
        </div>
        <div className="form-group">
            <TextField id="confirm-pwd" type={"password"} label="Confirm password" variant="outlined"  placeholder="confirm password" size="small"  fullWidth 
            error={this.state.confirmPasswordError} name="confirmPassword"
            helperText={
              this.state.confirmPasswordError
                ? "Confirm Password is required"
                : " "
            }
            onChange={(e) => this.changeHandle(e)} /> 
        </div>

        <div className="next-container">
        <Link to="/signin">
            <button type="button" class="next-btn" size="small" onClick={this.next}>Next</button>
        </Link >
        </div>
        </div>
        </form>

        
        );
    }
}
