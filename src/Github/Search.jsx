import { useState } from 'react';
import { getUserDetails } from './Service';

function Search() {
    const [username, setUserName] = useState("");
    const getUser = () => {
        getUserDetails(username).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='container'>
            <div class="row">
                <h2 class="text-primary">Github Search Application</h2>
            </div>
            <div class="row my-2">
                <div class="col-8">

                    <input onChange={(e) => { setUserName(e.target.value); }} class="form-control" type="text" placeholder="Enter Username" />
                </div>
                <div class="col-4">
                    <button class="btn btn-outline-primary px-5" onClick={getUser}>search    <i class="bi bi-search"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Search