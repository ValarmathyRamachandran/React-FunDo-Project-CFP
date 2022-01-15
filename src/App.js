
import logo from './logo.svg';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Reset from './pages/Reset/Reset';
import { Routes, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
    {/* <Routes> 
      <Route path='/signin' component={SignIn}>
     
      </Route>
      {/* <Route  path='/signup' component={Signup}></Route> */}
      {/* </Routes> */} 
{/* <SignUp /> */}
<SignIn />


       {/* <SignIn /> 
      <ForgotPassword />  
      < Reset />  */}
     
      
    </div>
  );
}

export default App;
