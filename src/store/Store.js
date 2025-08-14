import { legacy_createStore as createStore, applyMiddleware } from "redux";
import loginReducer from "../reducer/loginReducer";
import logger from "redux-logger";

const store = createStore(loginReducer, applyMiddleware(logger));

export default store;