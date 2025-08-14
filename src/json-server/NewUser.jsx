import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function NewUser({ setIsNewUser, getUsers, isNewUser, newuser, setNewUser }) {

    const updateUser = () => {
        axios.put(`http://localhost:3000/result/${newuser.id}`, newuser).then((res) => {
            
            getUsers();
            setNewUser({
                name: "",
                city: "",
            });
            setIsNewUser(true);
        })
            .catch((error) => {
                alert("Something went wrong while updating user");
                console.log(error);
            })
    }

    const addNewUser = () => {
        console.log(newuser);
        axios.post("http://localhost:3000/result", newuser)
            .then((res) => {
                
                console.log("succes", res)
                getUsers();
                setNewUser({
                    name: "",
                    city: "",
                });
            })
            .catch((error) => {
                alert("New Usrer is not created");
                console.log(error);
            })
    }
    return (
        <div style={{ padding: "50px" }} className='shadow p-3 mt-5' >
            <h2>{isNewUser ? "New User" : "Updated User"}</h2>
            <input className='form-control' value={newuser.name} onChange={(event) => { setNewUser({ ...newuser, name: event.target.value }); }} type='text' placeholder='username'  /><br />
            <select className='form-select' value={newuser.city} onChange={(event) => { setNewUser({ ...newuser, city: event.target.value }) }}>
                <option>Select City</option>
                <option>c1</option>
                <option>c2</option>
                <option>c3</option>
                <option>c4</option>
                <option>c5</option>
            </select><br />
            <button className='btn btn-outline-primary' onClick={isNewUser ? addNewUser : updateUser}>{isNewUser ? "New User" : "Updated User"}</button>
        </div>
    )
}

export default NewUser