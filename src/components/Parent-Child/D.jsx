import E from "./E";
const dStyles={
    width:"100px",
    boxShadow:"0 0 10px yellow",
    textAlign:"center",
    padding:"50px",
    margin:"15px auto"
}
function D({deta}){
    return (
        <div style={dStyles}>
            <h2>D Component</h2><br />
            {/* <h5>Data :{deta}</h5> */}
            <E final={deta}/>
        </div>
    );
}

export default D