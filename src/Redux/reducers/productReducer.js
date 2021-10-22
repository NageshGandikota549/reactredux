import ActionType from "../constants/actionTypes";

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.PRODUCT_LIST:
            return {...state,products:action.payload};

        case ActionType.PRODUCT_DETAILS:
            return {...state,selectedProduct:action.payload}
        
        case ActionType.REMOVE_PRODUCT:
            return {...state,selectedProduct:null}    

        default:
            return state;
    }
}

export default productReducer;