import { useEffect, useState } from "react";
import axios from "axios";

function Users({ setNewUser,setIsNewUser, getUsers, users }) {

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:3000/result/${id}`)
            .then((res) => {
                
                getUsers();
            })
            .catch((error) => {
                alert("Failed to Remove User");
                console.log(error);
            });
    }

    const updateUser = (data) => {
        setIsNewUser(false);
        setNewUser(data);
       
    }

    return (
        <div>
            <h2 style={{ textAlign: "center", padding: "20px" }}>Users Information</h2>
            {
                users.length > 0 && <div style={{ margin: "20px auto", width: "500px" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>City</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((element) => {
                                    return <tr>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.city}</td>
                                        <td>
                                            <button className="btn btn-outline-success" onClick={() => { updateUser(element) }}>Edit</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-danger" onClick={() => { deleteUser(element.id) }}>Delete</button>
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