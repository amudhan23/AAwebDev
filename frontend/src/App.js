import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';
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
import PrivateRoute from './components/Route/PrivateRoute';
import UpdateProfile from "./components/User/UpdateProfile.js";
import UpdatePassword from "./components/User/UpdatePassword.js";
import ForgotPassword from "./components/User/ForgotPassword.js";
import ResetPassword from "./components/User/ResetPassword.js";
import Cart from "./components/Cart/Cart.js";
import Wishlist from "./components/Wishlist/Wishlist.js";
import Dashboard from './components/admin/Dashboard.js';
import ProductList from './components/admin/ProductList.js'
import NewProduct from './components/admin/NewProduct';
import UpdateProduct from './components/admin/UpdateProduct';
import UsersList from "./components/admin/UsersList";
import UpdateUser from "./components/admin/UpdateUser";

function App() {
  // const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  //  console.log(user);
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
         <Route exact path="/search" element={<Search  placeholder="Enter a Product Name..."  />}/>
         <Route exact path="/login" element={<LoginSignup/>}/>        
         <Route exact path='/account' element={<ProtectedRoute/>}>
         <Route exact path="/account" element={<Profile/>}/>
         </Route>
         <Route exact path='/me/update' element={<ProtectedRoute/>}>
         <Route exact path="/me/update" element={<UpdateProfile/>}/>
         </Route>
         <Route exact path='/password/update' element={<ProtectedRoute/>}>
         <Route exact path="/password/update" element={<UpdatePassword/>}/>
         </Route>
         
         <Route exact path="/password/forgot" element={<ForgotPassword/>}/>
         <Route exact path="/password/reset/:token" element={<ResetPassword/>}/>
         <Route exact path="/cart" element={<Cart/>}/>
         <Route exact path="/wishlist" element={<Wishlist/>}/>
         <Route exact path='/admin/dashboard' element={<PrivateRoute />}>
         <Route exact path="/admin/dashboard" element={<Dashboard/>}/>
         </Route>
         <Route exact path='/admin/products' element={<PrivateRoute />}>
         <Route exact path="/admin/products" element={<ProductList/>}/>
         </Route>
         <Route exact path='/admin/product' element={<PrivateRoute />}>
         <Route exact path="/admin/product" element={<NewProduct/>}/>
         </Route>
         <Route exact path='/admin/product/:id' element={<PrivateRoute />}>
         <Route exact path="/admin/product/:id" element={<UpdateProduct/>}/>
         </Route>
         <Route exact path='/admin/users' element={<PrivateRoute />}>
         <Route exact path="/admin/users" element={<UsersList/>}/>
         </Route>
         <Route exact path='/admin/user/:id' element={<PrivateRoute />}>
         <Route exact path="/admin/user/:id" element={<UpdateUser/>}/>
         </Route>
         
       </Routes>
       
   <Footer/>

   </Router>
  );
}

export default App;
