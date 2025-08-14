import D from "./D";
import { useContext } from "react";
import myFirstContext from "./context";

function C() {

    let info = useContext(myFirstContext);
    return (
        <div style={{ padding: "10px" }}>
            <h2>C Component:{info}</h2>

            <br />
            <hr />
            <D />
        </div>
    );
}

export default C