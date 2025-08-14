import { useEffect, useState } from "react";
import axios from "axios";
function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get("http://localhost:3000/result")
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((error) => {
                alert("Something went wrong while accessing users");
                console.log(error);
            });
    }
    return (
        <div>
            <h2 style={{textAlign:"center",padding:"20px"}}>Users Information</h2>
            {
                users.length > 0 && <div style={{ margin: "20px auto",width:"500px" }}>
                    <table frame="box" rules="all" cellPadding="10" width={"100%"}>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Name</th>
                                <th>City</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody align="center">
                            {
                                users.map((element) => {
                                    return <tr>
                                        {/* <td>{element.id}</td> */}
                                        <td>{element.name}</td>
                                        <td>{element.city}</td>
                                        <td>
                                            <button>Edit</button>
                                        </td>
                                        <td>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                })}
                        </tbody>

                    </table>
                </div>
            }
        </div>
    );
}

export default Users