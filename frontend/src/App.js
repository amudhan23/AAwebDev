import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import WebFont from "webfontloader";
import React from "react";
import Home from "./components/Home/Home.js";
import ProductDetails from "./components/Product/ProductDetails.js";
import Products from "./components/Product/Products.js"
import Search from "./components/Product/Search.js";
import LoginSignup from './components/User/LoginSignup';
import store from "./store"
import { loadUser } from './actions/userAction';
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile.js";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProfile from "./components/User/UpdateProfile.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  
React.useEffect(() => {
  WebFont.load({
    google:{
      families:["Roboto", "Droid Sans", "Chilanka", "Franklin Gothic Medium", "Jost"]
    },
  });
  store.dispatch(loadUser());
}, []);
  return (
   <Router>
   <Header/>
   
  

       <Routes> 
         <Route exact={true} path="/" element={<Home/>}/>
         <Route exact={true} path="/product/:id" element={<ProductDetails />}/>
         <Route exact={true} path="/products" element={<Products/>}/>
         <Route exact path="/search" element={<Search/>}/>
         <Route exact path="/login" element={<LoginSignup/>}/>        
         <Route exact path='/account' element={<ProtectedRoute/>}>
         <Route exact path="/account" element={<Profile/>}/>
         </Route>
         <Route exact path='/me/update' element={<ProtectedRoute/>}>
         <Route exact path="/me/update" element={<UpdateProfile/>}/>
         </Route>
       </Routes>
       
   <Footer/>

   </Router>
  );
}

export default App;
