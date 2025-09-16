
import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import Dashboard from "../Pages/Dashbord";

const IsAuth = ({success , composant : Composant , ...rest}) => {
    const isAuthenticated = !!mail;
    console.log(isAuthenticated) // Replace with your actual authentication logic
    return isAuthenticated ? <Composant {...rest} /> : <Navigate to="/login" />;
};
export default IsAuth;