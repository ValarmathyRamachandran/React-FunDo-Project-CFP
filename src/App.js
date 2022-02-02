
import logo from './logo.svg';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Reset from './pages/Reset/Reset';
import Dashboard from './pages/Dashboard/Dashboard';
import TakeANote from './Component/TakeANote/TakeANote';
import ProtectedRoute from './Component/ProtectedRoutePath/ProtectedRoutePath';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useRoutes
} from "react-router-dom";

import ReactDOM from 'react-dom';
import Archive from './pages/Archive/Archive';
import Trash from './pages/Trash/Trash';
import Notes from './pages/Notes/Notes';



function App() {
  return (
    
    <Routes>
     
   
        <Route path="/" element={ <SignUp/> } />
        <Route path="/signin" element={ <SignIn/> } />
        <Route path="/forgotpassword" element={ <ForgotPassword/> } />
        <Route path = "/resetpassword" element={<Reset />} />
        <Route path= "/dashboard" element= {<Dashboard />} />
        <Route exact path= "/archive" element= {<Archive />} />
        <Route exact path= "/trash" element= {<Trash />} />
        <Route path= "/notes" element= {<Notes />} />
        <Route path= "/dashboard"  element={<Dashboard />} /> 
        <Route path='*' element={() => "Error 404 Page Not Found"} />

   
    </Routes> 
   
  );
}

export default App;
