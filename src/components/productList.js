import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../Redux/actions/productAction";
import "./productList.css";
import {Link} from "react-router-dom";

export const ProductList = () => {
  const products = useSelector((state) => state.products.products) || [];
  const dispatch = useDispatch();
  const getProducts = async () => {
    const products = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    dispatch(setProducts(products.data));
  };

  useEffect(() => {
    getProducts();
  }, []);


  const renderProducts = products.map(product => {
    const { name, title, price,id } = product;
    return (<div key={id}>
    <Link to={`/product/${id}`} >
      <div className="card product-card" >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
          <p className="card-text">{price}</p>

        </div>
      </div>
      </Link>
    </div>)

  })

  return (
    <div className="products-list" >
      {renderProducts}
    </div>
  );
};
