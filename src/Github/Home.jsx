import React from 'react'
import Search from './Search';
import Profile from './Profile';
import Details from './Details';

import { useState, useEffect } from 'react'
import { SetProfile } from './DataService';

function Home() {
    let [state, setState] = useState(null);
  useEffect(() => { SetProfile(setState) }, [])
    return (
        <div className="container shadow mt-3 p-3 w-75 mx-auto">
            <div className="row my-2">
                <Search />
            </div>
            <div className="row">
                <div className="col-4">
                    <Profile state={state} />
                </div>
                <div className="col-8">
                    <Details state={state}/>
                </div>
            </div>
        </div>
    )
}

export default Home