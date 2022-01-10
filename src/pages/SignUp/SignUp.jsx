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
                <div class="form">
                <h2 span id="blue">Fundo</h2>
                

                <h3>Create your Google Account</h3>

                <div className="form-group">
                <TextField id="first-name" label="First name" variant="outlined"  placeholder="First name" size="small"  style= {{width: '34%'}}/> &nbsp;&nbsp;&nbsp;
                <TextField id="last-name" label="Last name" variant="outlined" placeholder="Last name"   size="small" style= {{width: '33%'}} />
                </div>
                   
                <div className="form-group">
                <TextField  id="User-name" label="Username" variant="outlined" placeholder="Username "   size="small" style= {{width: '70%'}}  />
                <FormHelperText class="helper-text"> &nbsp; You can use letters,numbers & periods</FormHelperText>
                </div >
                
                <div class="email-link" >
                    <a href="#" >Use my current email address instead</a>
                </div>

                <div className="form-group">
                <TextField id="password" label="Password" variant="outlined" placeholder="Password"   size="small" style= {{width: '34%'}} /> &nbsp;&nbsp;&nbsp;
               <TextField id="confirm" label="Confirm" variant="outlined" placeholder="Confirm"   size="small" style= {{width: '33%'}} />
               <FormHelperText class="helper-text"> &nbsp; Use 8 or more characters with a mix of letters, numbers &<br />&nbsp; symbols</FormHelperText>
                </div>

                <div className="form-group">
                <FormControlLabel
              control={<Checkbox value="password" id="show-password" color="primary" size="small" />}
              label="Show Password"/>
                </div>
                <div class="next-container">
                <button type="button" class="next-btn" size="small">Next</button>
                <p class="sign-in-instead">
                     <a href="./pages/SignIn/SignIn">Sign in instead </a>
                </p>
                </div>
                <div class="logo-image-section">
                        <img class="google-image" src={Googlelogo} alt="" width={244} height={244} />
                        
                    </div>
               
               
                </div>
            </form>
            
        );
    }
}
