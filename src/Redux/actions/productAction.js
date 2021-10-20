import ActionType from "../constants/actionTypes"

export const setProducts=(products)=>{
return {
    type:ActionType.PRODUCT_LIST,
    payload:products
}
}



export const setSelectedProduct=(product)=>{
return {
    type:ActionType.PRODUCT_DETAILS,
    payload:product
}
}

export const removeSelectedProduct=()=>{
    return {
        type:ActionType.REMOVE_PRODUCT
    }
}