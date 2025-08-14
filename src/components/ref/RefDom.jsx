import { useRef } from "react";
function RefDom() {
    let h2Ref = useRef(null);
    let bottonRef = useRef(null);

    const changeContentStyle = () => {
        h2Ref.current.innerText = "DOM Manipulated using Ref concept";
        h2Ref.current.style.color = "red";

        bottonRef.current.style.color="red";
        bottonRef.current.style.padding="10px 20px"
    }
    return (
        <div style={{ padding: "50px" }}>
            <h2 ref={h2Ref}>DOM Manipulation using useRef() hook</h2><br />
            <button onClick={changeContentStyle} ref={bottonRef}>Change Content and Style</button>
        </div>
    );
}

export default RefDom



