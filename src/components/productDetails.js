import React from "react";
import axios from "axios";
import { useEffect } from "react";
import {useParams,useHistory} from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import {setSelectedProduct,removeSelectedProduct} from "../Redux/actions/productAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export const ProductDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();


 const product = useSelector(state=>state.products.selectedProduct);

  const getProduct = ()=>{
    dispatch(setSelectedProduct(id));
  }

useEffect(()=>{
  if(id !==null && id !=="")
  getProduct();
  return ()=> {
    dispatch(removeSelectedProduct());
  }
},[]);

const handleBackButton=()=> history.push("/");
 
  return (
    <div>
     <div><FontAwesomeIcon onClick={handleBackButton} icon={faArrowAltCircleLeft} /></div>
      {product && <div className="card product-card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{product.title}</h6>
          <p className="card-text">{product.price}</p>
        </div>
      </div>}
    </div>
  );
};
