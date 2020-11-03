import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import axios from 'axios';


function ProductScreen(props) {

  const productList = useSelector( state => state.productList);
  const  { products,loading,error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
    };
  }, []);

  return loading ? <div>loading..</div> :
  error ? <div>{error}</div>:
  <ul className="container producthome">
    {
      products.map(product =>
        <li>
          <div className="productmain">
            <div className="product">
              <div className="product-img"> 
                <img src={product.image} alt="giay"></img>
              </div>
              <div className="product-text">
                <h3> { product.name } </h3>
                <Link to = { "/product/" + product._id } > <button> Buy now </button></Link>
              </div>
            </div>
          </div>
        </li>
      )
    }
  </ul>
  
}


export default ProductScreen;
