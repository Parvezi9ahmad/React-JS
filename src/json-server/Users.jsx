import { useEffect, useState } from "react";
import axios from "axios";

function Users({ getUsers, users }) {

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:3000/result/${id}`)
            .then((res) => {
                alert("User Deleted Successfully");
                getUsers();
            })
            .catch((error) => {
                alert("Failed to Remove User");
                console.log(error);
            });
    }

    return (
        <div>
            <h2 style={{ textAlign: "center", padding: "20px" }}>Users Information</h2>
            {
                users.length > 0 && <div style={{ margin: "20px auto", width: "500px" }}>
                    <table frame="box" rules="all" cellPadding="10" width={"100%"}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>City</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody align="center">
                            {
                                users.map((element) => {
                                    return <tr>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.city}</td>
                                        <td>
                                            <button>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => { deleteUser(element.id) }}>Delete</button>
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