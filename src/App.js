import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Reset from './pages/Reset/Reset';
import { Link } from "react-router-dom";





function App() {
  return (
    <div className="App">
    

      <SignUp />
      {/* <SignIn />  */}
      {/* <ForgotPassword /> */}
      {/* < Reset /> */}
     
      
    </div>
  );
}

export default App;
