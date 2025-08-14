const initialProductData = {
    data: [],
}
const productsReducer = (state = initialProductData, action) => {

    if (action.type === "PRODUCTS") {
        state = {
            data: action.payload,
        }
    }
    return state;
}

export default productsReducer;