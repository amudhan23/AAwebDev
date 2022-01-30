import React, { Fragment, useState ,useEffect} from 'react'
import"./Search.css";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { getAdminProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from 'react-redux';


const Search = ({history}) => {

    const dispatch = useDispatch();

const [keyword,setKeyword] = useState("");

const { products } = useSelector((state) => state.products);
console.log(products);
useEffect(() => {
    dispatch(getAdminProduct());
    // dispatch(getAllOrders());
    // dispatch(getAllUsers());
  }, [dispatch]);
const searchSubmitHandler = (e) => {
e.preventDefault();
if(keyword.trim()){
    history.pushState(`/products/${keyword}`);
}else{
    history.pushState("/products");
}
};

    return (
        <Fragment>
            <form className='searchBox' onSubmit={searchSubmitHandler}>
                <input type="text"
                placeholder="What are you looking for..."
                onchange={(e)=> setKeyword(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
        </Fragment>
    )
}

export default Search;
