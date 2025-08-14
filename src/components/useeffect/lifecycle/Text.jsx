import { useEffect } from "react";
function Text() {
    useEffect(() => {
        document.title = "Text Component";
       

    }, [])
    return (
        <div>
            <h2 style={{ color: "red" }}>Text Component</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque perspiciatis beatae hic pariatur maiores culpa amet inventore expedita voluptates adipisci vel voluptate architecto incidunt, corrupti vitae nobis illo! Quos repellendus voluptate tempore architecto tenetur eos voluptatum aliquam unde impedit, dignissimos quasi animi laborum saepe vero odio obcaecati praesentium ut. Fuga ipsa sapiente tenetur. Perferendis facilis numquam amet asperiores, eligendi expedita laboriosam obcaecati, doloremque neque nihil libero reiciendis quia tempore illum voluptates delectus veniam, reprehenderit incidunt sequi voluptatum? Vitae id quisquam eum, animi, aut eaque quibusdam similique nihil natus, perferendis eveniet doloribus unde pariatur temporibus tenetur sit rem quod magni voluptatibus!</p>
        </div>
    );
}

export default Text