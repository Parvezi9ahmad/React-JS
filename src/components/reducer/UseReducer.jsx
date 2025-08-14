import { useReducer } from "react";

const reducerFn = (action) => {
    return "Parvez";
};

function UseReducer() {

    let [state, dispatch] = useReducer(reducerFn, 100);

    const modifyState = () => {
        dispatch({ type: "Dummy" });
    }
    return (
        <div style={{ padding: "100px" }}>
            <h2>UseReducer() Hook : {state}</h2>
            <button onClick={modifyState}>Update State</button>
        </div>
    );
}

export default UseReducer