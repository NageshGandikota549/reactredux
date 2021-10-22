import {createStore,compose, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";




const reduxStore = createStore(rootReducer,{},compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():f=>f));

export default reduxStore;