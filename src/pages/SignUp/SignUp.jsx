import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './SignUp.scss';
import SignIn from "../SignIn/SignIn";
import Googlelogo from './GoogleLogo.svg';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";


export default class SignUp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          firstName: "",
          lastName: "",
          userName:"",
          SignUpPassword:"",
          SignUpConfirm:"",
          firstNameError: false,
          lastNameError: false,
          userNameError:false,
          SignUpPasswordError:false,
          SignUpConfirmError:false
     
        };
      }

      validation = () => {
        console.log("in validation");
        let isError = false;
        const error = this.state;
        error.firstNameError = this.state.firstName === "" ? true : false;
        error.lastNameError = this.state.lastName === "" ? true : false;
        error.userNameError = this.state.userName === "" ? true : false;
        error.SignUpPasswordError = this.state.SignUpPassword === "" ? true : false;
        error.SignUpConfirmError = this.state.SignUpConfirm === "" ? true : false;
        
    
        this.setState({
          ...error
        });
        return (isError = error.firstNameError || error.lastNameError || error.userNameError 
            || error.SignUpPasswordError || error.SignUpConfirmError);
      };
    
      next = () => {
      
        var validated = this.validation();
        if (validated) {
          console.log("validation done successfully");
        }
        else{
            const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            service: "advance",
            email: this.state.userName,
            password: this.state.SignUpPassword
          };
        console.log(data);
          axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data)
        .then((response) => {
          console.log(response);
          console.log('success');
        });
     }
    }
    
    changeHandle = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
    render() {
        return (
            
            <form>
            <div className="SignUp-form">
            <h2 id="SignUp-fundo-heading">
            <p id="SignUp-blue">F</p>
            <p id="SignUp-red">u</p>
            <p id="SignUp-yellow">n</p>
            <p id="SignUp-blue">d</p>
            <p id="SignUp-green">o</p>
            <p id="SignUp-red">o</p>
            </h2>
                
            <h3 className="SignUp-create-heading">Create your Fundoo Account</h3>

            <div className="SignUpform-group">
                <div className="SignUp-firstName"><TextField name="firstName" id="first-name" label="First name" variant="outlined"  placeholder="First name" size="small"
                error={this.state.firstNameError}
                helperText={
                  this.state.firstNameError ? "First Name is required" : " "
                }
                onChange={(e) => this.changeHandle(e)}   /> {' '} 
                </div> 

                <div className="SignUp-lastName"><TextField name="lastName" id="last-name" label="Last name" variant="outlined" placeholder="Last name"   size="small" 
                error={this.state.lastNameError}
                helperText={
                  this.state.lastNameError ? "Last Name is required" : " "
                }
                onChange={(e) => this.changeHandle(e)} />
                </div>
            </div>
                   
            <div className="SignUpform-group-username">
                <div className="SignUp-userName"><TextField name="userName" id="User-name" label="Username" variant="outlined" placeholder="Username "size="small" fullWidth 
                error={this.state.userNameError}
                helperText={
                  this.state.userNameError ? "User Name is required" : " "
                }
                onChange={(e) => this.changeHandle(e)} />
                </div>
                <FormHelperText className="SignUp-helper-text">  You can use letters,numbers & periods</FormHelperText>
            </div >
                
            <div className="SignUp-email-container" >
                <a className="SignUpEmail-link" href="#" >Use my current email address instead</a>
            </div>

            <div className="SignUpform-group">
                <div className="SignUp-password" ><TextField name="SignUpPassword" type="password" id="password" label="Password" variant="outlined" placeholder="Password"   size="small" 
                error={this.state.SignUpPasswordError}
                helperText={
                  this.state.SignUpPasswordError ? "Password is required" : " "
                }
                onChange={(e) => this.changeHandle(e)}/> </div>{' '}

                <div className="SignUp-confirm" ><TextField name="SignUpConfirm" type="password" id="confirm" label="Confirm" variant="outlined" placeholder="Confirm"   size="small"  
                error={this.state.SignUpConfirmError}
                helperText={
                  this.state.SignUpConfirmError ? "Confirm Password is required" : " "
                }
                onChange={(e) => this.changeHandle(e)}/>
                </div>
            </div>
            <div className="SignUp-pwd-helper-text"><FormHelperText >Use 8 or more characters with a mix of letters, numbers &<br />{' '}symbols</FormHelperText></div>  
           
            <div className="SignUpform-group-showpwd">
                <FormControlLabel
                control={<Checkbox value="password" size="small"  />}
                label="Show Password" className="SignUpshowpwd-text" />
            </div>

            <div className="SignUpNext-container">
                <button type="button" className="SignUpNext-btn" size="small" onClick={this.next}>Next</button>
                <p className="sign-in-instead">
                    <a className="signInInstead-text" href="#">Sign in instead</a>
                    {/* < Link to ="/SignIn" className="signInInstead-text" >Sign in instead </Link> */}
                </p>
            </div>

            <div className="logo-image-section">
               <div> <img className="google-image" src={Googlelogo} alt="" width={244} height={244} />
                <span className="SignUpimage-text">One account. All of Fundoo <br />
                working for you.</span></div>
            </div>
               
            </div>
      </form>
    );
  }
}
    

