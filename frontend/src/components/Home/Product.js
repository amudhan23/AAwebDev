import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const options ={
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#FFC900",
    size: window.innerWidth<600? 20:18,
    value: 2.5,
    isHalf:true,
};

const Product = ({product}) => {
    return (
        <Link className='productCard' to={product._id}>
            <img src={product.image[0].url}/>
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} className="stars"/> <span>(256 reviews)</span>
            </div>
            <span>{product.price}</span>
        </Link>
        
    );
}

export default Product;
