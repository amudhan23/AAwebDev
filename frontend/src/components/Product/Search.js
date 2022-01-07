import React, { Fragment, useState } from 'react'
import"./Search.css";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'



const Search = ({history}) => {
const [keyword,setKeyword] = useState("");


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
