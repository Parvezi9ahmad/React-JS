import axios from "axios";
import productsActionCreator from "../actions/productActionCreator";


export const getAllProducts = (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    //.get("https://fakestoreapi.in/api/products")
    .then((res) => {
      dispatch(productsActionCreator(res.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDataCategoryWise = (dispatch, category) => {
  axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    //.get(`https://fakestoreapi.in/api/products/category?type=${category}`)
    .then((res) => {
      dispatch(productsActionCreator(res.data));
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
    });
};
