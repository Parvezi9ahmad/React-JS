const initialData = {
    name: "",
};

const myReducer = (state = initialData, action) => {
    if (action.type === "Name") {
        state = {
            name: action.nameComp,
        }
    }
    return state;
}

export default myReducer;