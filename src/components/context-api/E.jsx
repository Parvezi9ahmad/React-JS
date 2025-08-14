import { useContext } from "react";
import myFirstContext from "./context";

function E() {
    let info = useContext(myFirstContext);

    return (
        <div style={{ padding: "10px" }}>
            <h2>E Component</h2>

            <br />
            <h4 style={{ color: "green" }}>DATA:{info}</h4>
        </div>
    );
}

export default E