import { useState } from "react";
function Display({ setData }) {
    let [childdata, setChildData] = useState("React JS");
    return (
        <div>
            <h2>Display component</h2><br /><br />
            <button onClick={() => {
                setData(childdata);
            }}>Pass Data To Parent</button>
        </div>
    );
}

export default Display