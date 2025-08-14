import Details from "./Details";
import { useState } from "react";
import { myHomeContext } from "./MyHomeContext";
import Nav from "../nav/Nav";

function HomeContext() {

    let [state, setState] = useState("");
    let [data, setData] = useState("");

    const submitData = () => {
        setData(state);
    }

    return (
        <div style={{ padding: "50px" }}>
            <h2>HomeC Component</h2><br />
            <input type="text" placeholder="Enter Text" onChange={(event) => {
                setState(event.target.value);
                
            }} /><br /><br />
            <button onClick={submitData}>Submit</button><br /><br />
            <hr />
            <br /><br />
            <myHomeContext.Provider value={data}>
                <Details />
               
            </myHomeContext.Provider>

        </div>
    );
}

export default HomeContext;