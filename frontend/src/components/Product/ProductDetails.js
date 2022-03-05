import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./ProductDetails.css";
import { useSelector, useDispatch, connectAdvanced } from "react-redux";
import { clearErrors, getProductDetails ,  newReview,} from "../../actions/productAction";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import {
  addItemsToWishlist,
  removeItemsFromWishlist,
} from "../../actions/wishlistAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import {
  SideBySideMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [heart, setheart] = useState();
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { wishlistItems } = useSelector((state) => state.wishlist);


  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const increaseQuantity = () => {
    if (product.Stock <= quantity) {
      alert.info("Max quantity is reached");
      return;
    }
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      const qty = quantity - 1;
      setQuantity(qty);
    }
  };

  const checkWishlist = () => {
    let f = 0;
    wishlistItems.map((k, v) => {
      if (id === k.product) {
        deleteWishlistItems(id);
        f = 1;
        setheart(f);
        return f;
      }
    });
    if (f === 0) {
      addToWishlistHandler();
      setheart(f);
      return f;
    }
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    let f = 0;
    wishlistItems.map((k, v) => {
      if (id === k.product) {
        f = 1;
        setheart(1);
      }
    });
    if (f === 0) {
      setheart(0);
    }
  });

  // const check = (id) => {
  //     let f = 0;
  //    wishlistItems.map((k,v) => {
  //    if(id===k.product){
  //      console.log(true);
  //      f=1;

  //      return f;
  //    }
  //    });
  //    if(f===0){
  //     console.log(f);
  //      return f;
  //    }

  //   };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  const deleteWishlistItems = (id) => {
    dispatch(removeItemsFromWishlist(id));
    alert.info("Item removed from wishlist");
  };

  const addToWishlistHandler = () => {
    dispatch(addItemsToWishlist(id));
    alert.success("Item Wishlisted");
  };

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, reviewError, success]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#FFC900",
    size: window.innerWidth < 600 ? 20 : 18,
    value: product.ratings,
    isHalf: true,
  };
  const state = {
    alwaysInPlace:true,
    overlayOpacity: 0.6,
    switchSides: false,
    fillAvailableSpace: false,
    fillAlignTop: false,
    fillGapLeft: 0,
    fillGapRight:10,
    fillGapTop: 10,
    fillGapBottom: 10,
  };



  let dis = product.Discount * product.price/100;
  let finalprice = product.price- dis;


 

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name}-Aesthetica`} />
          <div className="ProductDetails">
            <div>
              <Carousel
              
                >
                {product.images &&
                  product.images.map((item, i) => (
                  
                    
                    

                    <SideBySideMagnifier
                      imageSrc={item.url}
                      className="CarouselImage"
                      imageAlt={`${i} Slide`}
                      {...state}
                      mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} 
                      touchActivation={TOUCH_ACTIVATION.TAP}>
                        
                    <img
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                      
                    />
                    </SideBySideMagnifier>
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product Id # {id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span>({product.numOfReviews} Reviews)</span>
              </div>
              <div className="detailsBlock-3">
                <h1 className={product.Discount>1?"price":"mrp"}>{`₹${product.price}`}</h1>
              {product.Discount>1?<h1 id="dis-price">{`₹${finalprice}`}</h1>:null}
              {product.Discount>1?<h4 className="dis">{`${product.Discount}% off`}</h4>:null}
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button disabled={product.Stock<1?true:false} onClick={addToCartHandler}>Add to Cart</button>
                  <p
                    className={heart === 1 ? "solid-heart" : "regular-heart"}
                    onClick={checkWishlist}
                  >
                    <FontAwesomeIcon icon={heart === 1 ? faHeart : farHeart} />
                  </p>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button className="submitReview" onClick={submitReviewToggle}>Submit Review</button>
            </div>
          </div>
          <h3 className="reviewsHeading"> Reviews</h3>
          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>


          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <p className="noReviews">No Reviews yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
