const initialData = {
    name: "",
    city: "",
    products: [],
};

const myReducer = (state = initialData, action) => {
    if (action.type === "Name") {
        state = {
            ...state,
            name: action.nameComp,
        };
    }
    else if (action.type === "CITY") {
        state = {
            ...state,
            city: action.cityName
        }
    }
    else if (action.type === "PRODUCTS") {
        state = {
            ...state,
            products: action.payload,
        }
    }
    return state;
}

export default myReducer;