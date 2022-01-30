import React, { useState , Fragment} from "react";
import { Link, useParams } from "react-router-dom";
import "./WishlistCard.css";
import { addItemsToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {
    removeItemsFromWishlist,
  } from "../../actions/wishlistAction";


const WishlistCard = ({ product }) => {
    const dispatch = useDispatch();
    const alert = useAlert();
   


    const [quantity, setQuantity] = useState(1);
    const addToCartHandler = () => {
        dispatch(addItemsToCart(product.product,quantity),deleteWishlistItems(product.product) );
        alert.success("Item Moved to Cart");
      };

      const deleteWishlistItems = (id) => {
        dispatch(removeItemsFromWishlist(id));
        
      };

  return (
      <Fragment>
          
    <div className="wishlistCard" >
      
    <Link to={`/product/${product.product}`} >
        <img className = "wishlistImg" src={product.image} alt="abc" />
      <p className="wishlistpara">{product.name}</p>
      </Link>
      
    <button onClick={addToCartHandler}>Move to Bag</button>
    </div>
    </Fragment>
  );
};

export default WishlistCard;