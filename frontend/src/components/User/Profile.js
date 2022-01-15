import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import {useAlert} from "react-alert";
import {logout} from "../../actions/userAction"


const Profile = () => {
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
      if (isAuthenticated === false) {
        navigate("/login");
      }
    }, [navigate, isAuthenticated]);
    
const logoutUser = ()=> {
       dispatch(logout());

    alert.success("Logout Successfully");
    
   }
  
    return (
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={`${user.name}`} />
            <div className="profile">
            <div className="profileContainer">
              <div>
                <h1>Hi {`${user.name}`} </h1>
                <img src={user.avatar.url? user.avatar.url: "/Profile.png"} alt={user.name} />
                <Link to="/me/update">Edit Profile</Link>
              </div>
              <div>
                  <h2>Profile Detail</h2>
                <div>
                  <h4>Full Name</h4>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
                <div>
                  <h4>Mobile Number</h4>
                  <p>{user.phone}</p>
                </div>
                <div>
                  <h4>Joined On</h4>
                  <p>{String(user.createdAt).substring(0, 10)}</p>
                </div>
  
                <div>
                  <Link to="/orders">My Orders</Link>
                  <Link to="/password/update">Change Password</Link>
                  
                </div>
              </div>
              
            </div>
            <div className='button'>
            <button className='btn' onClick={logoutUser}>
                LOG OUT
            </button>
            </div>
            </div>
            
          </Fragment>
        )}
      </Fragment>
    );
  };
  
  export default Profile;
