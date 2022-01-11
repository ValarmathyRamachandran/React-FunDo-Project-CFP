import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './SignUp.scss';
import Googlelogo from './GoogleLogo.svg'


export default class SignUp extends Component {
    render() {
        return (
            <form>
            <div className="SignUp-form">
            <h2  id="SignUp-fundo-heading">
            <p id="SignUp-blue">F</p>
            <p id="SignUp-red">u</p>
            <p id="SignUp-yellow">n</p>
            <p id="SignUp-blue">d</p>
            <p id="SignUp-green">o</p>
            <p id="SignUp-red">o</p>
            </h2>
                
            <h3 className="SignUp-create-heading">Create your Google Account</h3>

            <div className="SignUpform-group">
                <div className="SignUp-firstName"><TextField id="first-name" label="First name" variant="outlined"  placeholder="First name" size="small"   /> {' '} </div> 
                <div className="SignUp-lastName"><TextField id="last-name" label="Last name" variant="outlined" placeholder="Last name"   size="small"  /></div>
            </div>
                   
            <div className="SignUpform-group-username">
                <div className="SignUp-userName"><TextField  id="User-name" label="Username" variant="outlined" placeholder="Username "size="small" fullWidth  /></div>
                <FormHelperText className="SignUp-helper-text">  You can use letters,numbers & periods</FormHelperText>
            </div >
                
            <div className="SignUp-email-container" >
                <a className="SignUpEmail-link" href="#" >Use my current email address instead</a>
            </div>

            <div className="SignUpform-group">
                <div className="SignUp-password" ><TextField id="password" label="Password" variant="outlined" placeholder="Password"   size="small" /> </div>{' '}
                <div className="SignUp-confirm" ><TextField id="confirm" label="Confirm" variant="outlined" placeholder="Confirm"   size="small"  /></div>
            </div>
            <div className="SignUp-pwd-helper-text"><FormHelperText >Use 8 or more characters with a mix of letters, numbers &<br />{' '}symbols</FormHelperText></div>  
           
            <div className="SignUpform-group-showpwd">
                <FormControlLabel
                control={<Checkbox value="password" size="small"  />}
                label="Show Password" className="SignUpshowpwd-text" />
            </div>

            <div className="SignUpNext-container">
                <button type="button" className="SignUpNext-btn" size="small">Next</button>
                <p className="sign-in-instead">
                    <a className="signInInstead-text" href="./pages/SignIn/SignIn">Sign in instead </a>
                </p>
            </div>

            <div className="logo-image-section">
                <img className="google-image" src={Googlelogo} alt="" width={244} height={244} />
            </div>
               
            </div>
            </form>
            
        );
    }
}
