const eStyles={
    width:"20px",
    boxShadow:"0 0 10px pink",
    textAlign:"center",
    padding:"50px",
    margin:"10px auto"
}
function E(props){
    return (
        <div style={eStyles}>
            <h2>E Component</h2><br />
            <h5>Data :{props.final}</h5>
        </div>
    );
}

export default E