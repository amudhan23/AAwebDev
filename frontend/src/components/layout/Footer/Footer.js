import React from "react";
import { Grid,Button, TextField } from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
        <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3} className="grid">
        <div className="leftFooter">
          <h4 className="footer-head">Quick Links</h4>
          <ul className="list-unstyled">
            <li><a href="#">Help </a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid">
        <div className="midFooter">
          <h4 className="footer-head">Shop</h4>
          <ul className="list-unstyled">
            <li><a href="#">Store </a></li>
            <li><a href="#">Gift Card</a></li>
            <li><a href="#">Discount</a></li>
            <li><a href="#">Customize</a></li>
          </ul>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid">
        <div className="midTwoFooter">
            
          <h4>NewsLetter</h4>
        
        <input type="text" id="lname" name="newsletterEmail" className="input" placeholder="Enter your email"/><br/>
        <Button variant="contained" id="button">Submit</Button>
          
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} className="grid">
        <div className="rightFooter">
          <h4>Social Media</h4>
        <a href="#" className="social-media"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="social-media"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="social-media"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="social-media"><FontAwesomeIcon icon={faLinkedin}/></a>
          
        </div>
      </Grid>
        
      <Grid item xs={12} sm={12} md={12}>
      <p className="footer-para">
            &copy;{new Date().getFullYear()} Aesthetica Head | All rights reserved |
            Terms Of Service | Privacy
          </p>
      </Grid>
      </Grid>
        
    </footer>
  );
};

export default Footer;
