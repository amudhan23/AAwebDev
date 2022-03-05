import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, clearErrors } from "../../actions/productAction";
import { useParams } from 'react-router-dom';
import ProductCard from '../Home/ProductCard';
import Loader from '../layout/Loader/Loader';
import MetaData from '../layout/MetaData';
import Pagination from "react-js-pagination";

const ProductCategory = () => {
const {category} = useParams();
const dispatch = useDispatch();
const alert = useAlert();
const [currentPage, setCurrentPage] = useState(1);
const [price, setPrice] = useState([0, 250000]);
const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };


useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(currentPage, price,category));
  }, [dispatch,currentPage,price,category, alert, error]);

  let count = filteredProductsCount;

  return <Fragment>
  {loading ? (
    <Loader />
  ) : (
    <Fragment>
      <MetaData title={category}/>
      <h2 className="productsHeading">{category}</h2>
      <div className="products">
        {products &&
          products.map((product) => 
              
                (<ProductCard key={product._id} product={product} />)
              
          )}
    </div>
    {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText=">>"
                prevPageText="<<"
                firstPageText="Start"
                lastPageText="End"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}


    </Fragment>
  )}
</Fragment>
};

export default ProductCategory;
