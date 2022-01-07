import "./Home.css";
import React, { Fragment,useEffect } from 'react'
import { Button, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "react-alert";


// const product={
//     name: "Mens Watch",
//     image :[{url:"https://m.media-amazon.com/images/I/7194FJHAS0L._AC_UL1300_.jpg"}],
//     price:"$200",
//     _id:"XYZ",
// };

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const {loading, error, products,productsCount} = useSelector(
        (state) => state.products
    );

//eror part has to be done
    useEffect(() => {
      if(error){
        alert.error(error);
        dispatch(clearErrors());
      }

           dispatch(getProduct());

    }, [dispatch,error,alert]);


    return (
        <Fragment>
            {loading?(<Loader/>):
            (<Fragment>
                <MetaData title="Aesthetica Head"/>
                <div className="container">
                   <Grid>
                   <Grid item xs={12} sm={12} md={12}> <h1>Welcome to Aesthetica Head</h1></Grid>
                    <Grid item xs={12} sm={12} md={12}><p>
                        An Ecommerce website.
                    </p></Grid>
                    <Grid item xs={12} sm={12} md={12} className="button-grid"><a href="#container"><Button variant="outlined" id='Button'>Scroll <FontAwesomeIcon icon={faArrowDown}/></Button></a></Grid>
                    </Grid>
                    
                    
                </div>
                <h2 className="homeHeading">Feature Products</h2>
    
                <div className="container-2" id="container">
                             
                        {products && products.map((product) => <Product product={product}/>)}
                    </div>
                   
    
            </Fragment>)}
        </Fragment>
    )
}

export default Home;
