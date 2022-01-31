import React from "react";
import { Route, Navigate } from "react-router-dom";
import Auth from "../../service/Auth";


const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => localStorage.getItem('token') ? (<Component {...props}/>) : (
            <Navigate to={{ pathname: '/' }} />
        )}
    />
);

export default ProtectedRoute;