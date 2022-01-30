import React, {Fragment} from 'react';
import "./Wishlist.css";
import { useSelector } from 'react-redux';
import WishlistCard from "./WishlistCard";
import MetaData from '../layout/MetaData';
import { Link} from "react-router-dom";
import { Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFrown} from "@fortawesome/free-solid-svg-icons";


const Wishlist = () => {

     const { wishlistItems, resultPerPage } = useSelector((state) => state.wishlist);


    return (
        
        <Fragment>
        {wishlistItems.length === 0 ? (
          <div className="emptyCart">
            <FontAwesomeIcon icon={faFrown} />
  
            <Typography>No Product Wishlisted</Typography>
            <Link to="/products">View Products</Link>
          </div>
        ) : (
            <Fragment>
            <MetaData title="Wishlist-Aesthetica"/>
            <h2 className="productsHeading">All Products</h2>
            <div className="products">
              {wishlistItems &&
                wishlistItems.map((item,i) => (
                  <WishlistCard  key={item.product} product={item} />
                ))}
            </div>
          </Fragment>
        )}
      </Fragment>
    )
}

export default Wishlist;
