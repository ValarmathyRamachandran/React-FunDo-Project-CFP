import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './SignUp.css';
import Googlelogo from './GoogleLogo.svg'


export default class SignUp extends Component {
    render() {
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
                

                <h3 className="create-heading">Create your Google Account</h3>

                <div className="form-group">
                <TextField id="first-name" label="First name" variant="outlined"  placeholder="First name" size="small"  style= {{width: '30%'}}/> &nbsp;&nbsp;&nbsp;
                <TextField id="last-name" label="Last name" variant="outlined" placeholder="Last name"   size="small" style= {{width: '30%'}} />
                </div>
                   
                <div className="form-group">
                <div className="userName"><TextField  id="User-name" label="Username" variant="outlined" placeholder="Username "   size="small" style= {{width: '62%'}}  /></div>
                <FormHelperText className="helper-text"> &nbsp; You can use letters,numbers & periods</FormHelperText>
                </div >
                
                <div className="email-link" >
                    <a href="#" >Use my current email address instead</a>
                </div>

                <div className="form-group">
                <TextField id="password" label="Password" variant="outlined" placeholder="Password"   size="small" style= {{width: '30%'}} /> &nbsp;&nbsp;&nbsp;
                <TextField id="confirm" label="Confirm" variant="outlined" placeholder="Confirm"   size="small" style= {{width: '30%'}} />
               <FormHelperText className="helper-text"> &nbsp; Use 8 or more characters with a mix of letters, numbers &<br />&nbsp; symbols</FormHelperText>
                </div>

                <div className="form-group">
                <FormControlLabel
              control={<Checkbox value="password" id="show-password" color="primary" size="small" />}
              label="Show Password"/>
                </div>
                <div className="next-container">
                <button type="button" className="next-btn" size="small">Next</button>
                <p className="sign-in-instead">
                     <a href="./pages/SignIn/SignIn">Sign in instead </a>
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
