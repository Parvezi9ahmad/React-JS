import React from 'react'
import Users from './Users'
import NewUser from './NewUser'
import { useState } from 'react';
import axios from 'axios';

function UserHome() {
    let [users, setUsers] = useState([]);
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
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <NewUser getUsers={getUsers}/>
                <Users getUsers={getUsers}  users={users}/>
            </div>

        </div>
    )
}

export default UserHome