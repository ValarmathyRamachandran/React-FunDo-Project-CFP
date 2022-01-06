import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './SignIn.css';
// import Googlelogo from '.\fundo-app\src\images\GoogleLogo.svg';



export default class SignIn extends Component {
    render() {
        return (
            <form>
                <div class="form">
                <h2>FunDo</h2>
                <h3>Create your Google Account</h3>

                <div className="form-group">
                <TextField id="first-name" label="First name" variant="outlined"  placeholder="First name"    size="small"/> &nbsp;&nbsp;&nbsp;
                <TextField id="last-name" label="Last name" variant="outlined" placeholder="Last name"   size="small" />
                </div>
                   
                <div className="form-group">
                <TextField id="User-name" label="Username" variant="outlined" placeholder="Username"   size="small"/>
                </div >
                {/* elementType="You can use letters,numbers& periods" */}
                <div class="email-link" >
                    <a href="#" >Use my current email address instead</a>
                </div>

                <div className="form-group">
                <TextField id="password" label="Password" variant="outlined" placeholder="Password"   size="small" /> &nbsp;&nbsp;&nbsp;
               <TextField id="confirm" label="Confirm" variant="outlined" placeholder="Confirm"   size="small"/>
                </div>

                <div className="form-group">
                <FormControlLabel
              control={<Checkbox value="password" color="primary"size="small" />}
              label="Show Password"/>
                </div>
                <div class="next-container">
                <button type="button" class="next-btn" size="small">Next</button>
                <p class="sign-in-instead">
                     <a href="#">Sign in instead </a>
                </p>
                </div>
                {/* <div class="google-image">
                        <img src={Googlelogo} alt="" width={244} height={244} />
                    </div> */}
                </div>
            </form>
            
        );
    }
}
