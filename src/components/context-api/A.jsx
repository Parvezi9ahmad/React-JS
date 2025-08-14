import B from "./B";
import myFirstContext from "./context";

function A() {
    return (
        <div style={{ padding: "50px" }}>
            <h2>A Component</h2><br />
            <button>Submit</button>
            <br />
            <br />
            <hr />
            {/* <myFirstContext.Provider value={100}>
                <B />
            </myFirstContext.Provider> */}

            <myFirstContext.Provider value={100}>
                <B />
            </myFirstContext.Provider>


        </div>
    );
}

export default A