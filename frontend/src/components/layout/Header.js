import React, { useState } from "react";
import "./Header.css";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faUser, faShoppingCart, faBars} from '@fortawesome/free-solid-svg-icons'

// import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>A</span>sthetica
            <span>H</span>ead
          </h2>
        </div>
        <div
         className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/products">products</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>
        <div className="fab-icons">
          <ul className="fab-icons-desktop">
            <li>
              <a
                href="/search"
                className="icons">
             <FontAwesomeIcon icon={faSearch}/>
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="icons">
                <FontAwesomeIcon icon={faUser}/>
              </a>
            </li>
            <li>
              <a
                href="/cart"
                className="icons"
               >
                <FontAwesomeIcon icon={faShoppingCart}/>
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="/menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <FontAwesomeIcon icon={faBars} className="ham-icons"/>
            </a>
          </div>
        </div>


       </nav>
       
    </>
  );
};

export default Header;
