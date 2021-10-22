import ActionType from "../constants/actionTypes";
import axios from "axios";

export const setProducts=()=>{

   return async(dispatch,getState)=>{
        const response = await axios.get("https://fakestoreapi.com/products").catch(error=>
        console.log(error));

        dispatch({type:ActionType.PRODUCT_LIST,payload:response.data})
    }
}



export const setSelectedProduct=(id)=>{
    return async(dispatch,getState)=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(error=>
        console.log(error));

        dispatch({type:ActionType.PRODUCT_DETAILS,payload:response.data})
    }
}

export const removeSelectedProduct=()=>{
    return {
        type:ActionType.REMOVE_PRODUCT
    }
}