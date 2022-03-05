import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
     
        // <Fragment>
        // {loading === false && (
        //   <Route
        //     {...rest}
        //     render={(props) => {
        //       if (isAuthenticated === false) {
        //         return <Navigate to= "/login"/>;
        //       }
  
  
        //       return <Element {...props} />;
        //     }}
        //   />


        }
    
        
  

export default ProtectedRoute;
