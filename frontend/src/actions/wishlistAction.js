import {
    WISHLIST_ITEM,
     REMOVE_FROM_WISHLIST ,
     
   } from "../constants/wishlistConstants";
   import axios from "axios";

   // Add to Wishlist
export const addItemsToWishlist = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
  
    dispatch({
      type: WISHLIST_ITEM,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
    
      },
    });
  
    localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
  };

  // REMOVE FROM Wishlist
export const removeItemsFromWishlist = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: id,
  });

  localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
};