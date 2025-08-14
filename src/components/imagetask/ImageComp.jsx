import "./ImageComp.css";
import { useState } from 'react'

function ImageComp() {
    let [url, setUrl] = useState("https://th.bing.com/th/id/R.80c5007eb1c89d61a8ea9fd04ab11503?rik=q3EY%2f1ETY%2bg3XQ&riu=http%3a%2f%2fcode-fin-nua.com%2fwp-content%2fuploads%2f2020%2f06%2freact_logo_1200x640.png&ehk=tEDDKXPbWmJipWAdcwmKUGAkGAAcZN7plRqj70HXha4%3d&risl=&pid=ImgRaw&r=0");
    let [title, setTitle] = useState("React");
    const changeToAngular = () => {
        setUrl("https://www.angularjswiki.com/angular/use-ngoptimizedimage-to-improve-image-loading-performance-in-angular/featured.png");
        setTitle("Angular");
    };

    const changeToReact = () => {
        setUrl("https://th.bing.com/th/id/R.80c5007eb1c89d61a8ea9fd04ab11503?rik=q3EY%2f1ETY%2bg3XQ&riu=http%3a%2f%2fcode-fin-nua.com%2fwp-content%2fuploads%2f2020%2f06%2freact_logo_1200x640.png&ehk=tEDDKXPbWmJipWAdcwmKUGAkGAAcZN7plRqj70HXha4%3d&risl=&pid=ImgRaw&r=0");
        setTitle("React");
    };

    return (<div id="ImageComp">
        <h1 style={{ color: "red" }}>{title}</h1>
        <img src={url} width="500" height="400" /><br /><br />
        <button onClick={changeToReact}>React</button>
        <button onClick={changeToAngular}>Angular</button>
    </div>
    )
}

export default ImageComp