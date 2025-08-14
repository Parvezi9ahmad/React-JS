import loginActionCreator from "./ActionCreator"
import { useDispatch } from "react-redux"

function Login() {
    const dispatch = useDispatch();
    const login = () => {
        dispatch(loginActionCreator());
    }
    return (
        <div className='my-5 mx-auto text-center shadow p-5' style={{ width: "500px" }}>
            <h3>SIgn In</h3>
            <div className='my-5'>
                <input type='text' placeholder='Enter Email' className='form-control' />
            </div>
            <div className='my-5'>
                <input type='password' placeholder='Enter Password' className='form-control' />
            </div>

            <div>
                <button className='btn btn-dark' onClick={login}>Sign In</button>
            </div>

            <div className='mt-4'>
                <a className='' href='signup'>Create a Account</a>
            </div>
        </div>
    )
}

export default Login