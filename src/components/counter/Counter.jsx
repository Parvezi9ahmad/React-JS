import "./Counter.css"
import { useState } from 'react'

function Counter() {
    var [state, setState] = useState(0);


    const increaseCount = () => {
        setState((prevState) => { return prevState + 1 });
        setState((prevState) => { return prevState + 1 });
        setState((prevState) => { return prevState + 1 });

    };
    return <div className="counter">
        <h2>Counter App</h2>
        <p>Count Value is : {state} </p>
        <button onClick={increaseCount}>incCount</button>


    </div>
}

export default Counter