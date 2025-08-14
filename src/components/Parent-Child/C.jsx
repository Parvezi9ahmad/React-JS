import D from "./D";
const cStyles={
    width:"200px",
    boxShadow:"0 0 10px blue",
    textAlign:"center",
    padding:"50px",
    margin:"20px auto"
}
function C({data}){
    return (
        <div style={cStyles}>
            <h2>C Component</h2><br />
            {/* <h4>Data :{data}</h4> */}
            <D deta={data}/>
        </div>
    );
}

export default C