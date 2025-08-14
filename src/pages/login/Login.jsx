import loginActionCreator from "./ActionCreator"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
    let [error, setError] = useState(false);
    let [user, setUser] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const login = () => {
        //validation
        dispatch(loginActionCreator());
        // axios.post("url", user).then((res) => {
        //     dispatch(loginActionCreator());
        // }).catch((error) => {
        //     setError(true);
        // })

    }
    return (
        <div className='my-5 mx-auto shadow p-5' style={{ width: "500px" }}>
            <h3>SIgn In</h3>
            <div className='my-5'>
                <input value={user.email} type='text' placeholder='Enter Email' className='form-control'
                    onChange={(event) => {
                        setUser({
                            ...user,
                            email: event.target.value
                        })
                    }} />
                {
                    error ? <span style={{ color: "red" }}>email is not valid</span> : null
                }
            </div>
            <div className='my-5'>
                <input value={user.password} type='password' placeholder='Enter Password' className='form-control'
                    onChange={(event) => setUser({
                        ...user,
                        password: event.target.value
                    }
                    )} />
            </div>

            <div>
                <button className='btn btn-dark' onClick={login}>Sign In</button>
            </div>

            <div className='mt-4'>
                <Link className='text-primary nav-link fw-bold' to='signup'>Create a Account</Link>
            </div>
        </div>
    )
}

export default Login