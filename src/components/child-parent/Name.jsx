import Display from "./Display";
import { useState } from "react";

function Name() {
    let [state, setState] = useState("");
    return (
        <div style={{ padding: "50px" }}>
            <h2>Name component</h2><br />
            <p>Child Data :{state}</p>
            <br /><br />
            <hr /><br /><br />
            <Display setData={setState} />
        </div>
    );
}

export default Name
