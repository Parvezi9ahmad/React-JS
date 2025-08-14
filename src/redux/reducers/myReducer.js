const initialData = {
    name: "",
    city: "",
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
    return state;
}

export default myReducer;