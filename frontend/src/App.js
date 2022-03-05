import './App.css';
import {useEffect, useState} from "react"
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
import Shipping from "./components/Cart/Shipping.js";
import ProductCategory  from './components/Product/ProductCategory';
import Contact from './components/Contact/Contact';
import About from "./components/layout/About/About";
import ConfirmOrder from "./components/Cart/ConfirmOrder.js"
import OrderDetails from "./components/Order/OrderDetails.js";
import OrderSuccess from "./components/Cart/OrderSuccess.js"
import OrderList from "./components/admin/OrderList";
import ProcessOrder from "./components/admin/ProcessOrder";
import ProductReviews from "./components/admin/ProductReviews.js";
import Payment from "./components/Cart/Payment.js"
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import MyOrders from "./components/Order/MyOrders";
// import NotFound from "./components/layout/NotFound/NotFound";
import axios from "axios"
function App() {
  // const { user, loading, isAuthenticated } = useSelector((state) => state.user);

 
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);

  }

useEffect(() => {
  WebFont.load({
    google:{
      families:["Roboto", "Droid Sans", "Chilanka", "Franklin Gothic Medium", "Jost"]
    },
  });
  store.dispatch(loadUser());
  getStripeApiKey();
 
}, []);

  return (
   <Router>
   <Header/>
  

       <Routes> 
         <Route exact={true} path="/" element={<Home/>}/>
         <Route exact={true} path="/product/:id" element={<ProductDetails />}/>
         <Route exact path="/:category"  element={<ProductCategory/>}/>
         
         <Route exact={true} path="/products" element={<Products/>}/>
         <Route  path="/products/:keyword" element={<Products/>}/>
         <Route exact path="/search" element={<Search  placeholder="Enter a Product Name..."  />}/>
         <Route exact path="/login" element={<LoginSignup/>}/> 
         <Route exact path="/contact" element={<Contact/>}/>       
         <Route exact path="/about" element={<About/>}/>   
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
         <Route exact path='/shipping' element={<ProtectedRoute/>}>
         <Route exact path="/shipping" element={<Shipping/>}/>
         </Route>
         <Route exact path='/order/confirm' element={<ProtectedRoute/>}>
         <Route exact path="/order/confirm" element={ <ConfirmOrder/>}/>
         </Route>
         {stripeApiKey && (
        
           <Route exact path='/process/payment' element={<ProtectedRoute/>}>
         <Route exact path="/process/payment" element={<Elements stripe={loadStripe(stripeApiKey)}><Payment/></Elements>}/>
         </Route>
       
      )}
  
  <Route exact path='/order/:id' element={<ProtectedRoute/>}>
         <Route exact path="/order/:id" element={ <OrderDetails/>}/>
         </Route>
         <Route exact path='/success' element={<ProtectedRoute/>}>
         <Route exact path="/success" element={<OrderSuccess/>}/>
         </Route>
         <Route exact path='/orders' element={<ProtectedRoute/>}>
         <Route exact path="/orders" element={<MyOrders/>}/>
         </Route>
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
         <Route exact path='/admin/orders' element={<PrivateRoute />}>
         <Route exact path="/admin/orders" element={<OrderList/>}/>
         </Route>
         <Route exact path='/admin/order/:id' element={<PrivateRoute />}>
         <Route exact path="/admin/order/:id" element={<ProcessOrder/>}/>
         </Route>
         <Route exact path='/admin/reviews' element={<PrivateRoute />}>
         <Route exact path="/admin/reviews" element={<ProductReviews/>}/>
         </Route>
         {/* <Route path="*" element={ <NotFound/>}/> */}
         
       </Routes>
       
   <Footer/>

   </Router>
  );
}

export default App;
