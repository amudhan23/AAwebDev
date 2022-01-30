import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
       
        return isAuthenticated && user.role ==="admin"? <Outlet />: <Navigate to="/login" />;

  


        }
    
        
  

export default PrivateRoute;
