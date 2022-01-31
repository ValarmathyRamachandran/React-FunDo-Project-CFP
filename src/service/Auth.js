import { useState } from "react";

   
    var Auth ={
        isAuthenticated :false,
        authenticated(){
            this.isAuthenticated = true;
        },
    
        signout(){
            this.isAuthenticated = false;
        },
        getAuth (){
            return this.isAuthenticated;
        }
    };
    
export default Auth;