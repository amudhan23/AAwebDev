import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import WebFont from "webfontloader";
import React from "react";
import Home from "./components/Home/Home.js"


function App() {

  
React.useEffect(() => {
  WebFont.load({
    google:{
      families:["Roboto", "Droid Sans", "Chilanka", "Franklin Gothic Medium"]
    }
  })
}, []);
  return (
   <Router>
   <Header/>
       <Routes> <Route exact={true} path="/" element={<Home/>}/> </Routes>
       
   <Footer/>

   </Router>
  );
}

export default App;
