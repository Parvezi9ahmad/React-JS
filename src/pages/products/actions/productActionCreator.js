const productActionCreator = (data) => {
    return {
        type: "PRODUCTS",
        payload: data
    }
}

export default productActionCreator;