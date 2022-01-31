
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

const AppWrapper=()=>{
  let routes = useRoutes([
    { path: "/", element: <SignUp /> },
    { path: "/signin", element: <SignIn /> },
    { path:"/forgotpassword", element:<ForgotPassword />},
    { path:"/resetpassword", element:<Reset />},
    { path:"/dashboard", element:<Dashboard />},
   <ProtectedRoute >path:"/dashboard" , element:<Dashboard /> </ProtectedRoute> ,
    <Route path='*' component={() => "Error 404 Page Not Found"} />
    
    
  ]);
  return routes;
}

function App() {
  return (
    <Router>
     
    <AppWrapper />
   
    </Router> 
  );
}

export default App;
