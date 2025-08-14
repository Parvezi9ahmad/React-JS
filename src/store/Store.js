import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import loginReducer from "../reducer/loginReducer";
import logger from "redux-logger";
import productsReducer from "../pages/products/reducers/ProductsReducer";

const combinedrReducer=combineReducers({ loginReducer, productsReducer })
const store = createStore(combinedrReducer, applyMiddleware(logger));

export default store;