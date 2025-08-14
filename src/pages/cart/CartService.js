import cartActionCreator from "../products/actions/cartActionCreator";

var addtocartService = (productdata, dispatch) => {
    dispatch(cartActionCreator(productdata));
    
};

export default addtocartService;