import { useState } from "react";
function UserNames(){
    let[names,setNames]=useState(["Rohan","Aish","Vaish","Aadi","Wilson","Mat"]);

    return (
        <div style={{padding:"50px"}}>
            <h2>User Names</h2>
            <ul>
                {
                    names.map(function(name){
                        return <li>{name}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default UserNames