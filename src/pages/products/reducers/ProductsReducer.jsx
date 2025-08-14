const initialProductData = {
    data: [],
    cart: [],
}
const productsReducer = (state = initialProductData, action) => {

    if (action.type === "PRODUCTS") {
        state = {
            ...state,
            data: action.payload,
        }
    }
    else if (action.type === "CART") {
        state = {
            ...state,
            cart: [...state.cart, action.payload]
        };

    }
    return state;
}

export default productsReducer;