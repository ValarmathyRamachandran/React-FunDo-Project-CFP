
import logo from './logo.svg';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Reset from './pages/Reset/Reset';
import Dashboard from './pages/Dashboard/Dashboard';
import TakeANote from './Component/TakeANote/TakeANote';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useRoutes
} from "react-router-dom";

import ReactDOM from 'react-dom';

const AppWrapper=()=>{
  let routes = useRoutes([
    { path: "/signup", element: <SignUp /> },
    { path: "/signin", element: <SignIn /> },
    
  ]);
  return routes;
}

function App() {
  return (
  //   <Router>
     
  //   <AppWrapper />
   
  // </Router>
  <Dashboard />
  // <TakeANote/>
  
 
  );
}

export default App;
