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



function App() {

  
React.useEffect(() => {
  WebFont.load({
    google:{
      families:["Roboto", "Droid Sans", "Chilanka", "Franklin Gothic Medium", "Jost"]
    }
  })
}, []);
  return (
   <Router>
   <Header/>
       <Routes> 
         <Route exact={true} path="/" element={<Home/>}/>
         <Route exact={true} path="/product/:id" element={<ProductDetails />}/>
         <Route exact={true} path="/products" element={<Products/>}/>
         <Route exact={true} path="/search" element={<Search/>}/>
        
       </Routes>
       
   <Footer/>

   </Router>
  );
}

export default App;
