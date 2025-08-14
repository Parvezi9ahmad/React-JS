import { useState, useEffect } from "react";

function Image() {
    const [image, setImage] = useState("https://th.bing.com/th/id/R.80c5007eb1c89d61a8ea9fd04ab11503?rik=q3EY%2f1ETY%2bg3XQ&riu=http%3a%2f%2fcode-fin-nua.com%2fwp-content%2fuploads%2f2020%2f06%2freact_logo_1200x640.png&ehk=tEDDKXPbWmJipWAdcwmKUGAkGAAcZN7plRqj70HXha4%3d&risl=&pid=ImgRaw&r=0");
    const [name, setName] = useState("React JS");
    // useEffect(() => {
    //     console.log("useEffect callback is called");
    //     return () => {

    //         console.log("Returned Function")
    //     }
    // }, [])



    useEffect(() => {
        console.log("useEffect callback is called");
        document.title = `${name} Image Component`
        localStorage.setItem('name', "Parvez")

        return()=>{
            localStorage.removeItem('name')
        }
    })

    return (
        <div>
            {/* {console.log("JSX Console")} */}
            <h2>{name} Image Component </h2> <br />
            <img src={image} width="300" height="300" />
            <br /><br />
            <button onClick={() => {
                setImage("https://strapi.dhiwise.com/uploads/Blog_Common_Image_Next_OG_Image_8ab5e85f77.png")
            }}>Next JS</button>

            <button onClick={() => {
                setName("Vue JS")
            }}>Change Title</button>
            <br /><br />
        </div>
    );
}

export default Image