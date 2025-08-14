import { useSelector } from "react-redux";

function Details() {
    let data = useSelector((storedata) => {
        return storedata;
    })

    return (
        <div style={{ padding: "50px" }}>
            <h2>Details Components</h2>
            <p style={{ color: "green", fontWeight: "bold", fontSize: "21px" }}>Name : {data.name}</p>
            <p style={{ color: "green", fontWeight: "bold", fontSize: "21px" }}>City : {data.city}</p>
        </div>
    );
}

export default Details