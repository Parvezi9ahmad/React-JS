import { useState, useRef } from "react";
import "./Ref.css"
function Ref() {
    let [state, setState] = useState(null);
    let [data, setData] = useState(null);
    let info = useRef("Hello");
    const updateState = () => {
        setState(100);
    }

    const updateData = () => {
        setData(1000);
    }

    const displayValue = () => {
        console.log("State", state);
        console.log("Data", data);
        console.log("variable", info.current);
    }

    const updateValue = () => {
        info.current = "Welcome";
    }
    return (
        <div className="refContainer">
            <h2>Ref Component:{state}</h2>
            <button onClick={updateState}>Update State</button>
            <button onClick={updateData}>Update Data</button>
            <button onClick={updateValue}>Update Value</button>
            <button onClick={displayValue}>Display</button>
        </div>
    );
}

export default Ref