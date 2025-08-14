import axios from "axios";

function AllProducts() {
    const getProducts=()=>{
        var promiseObject=axios.get("https://fakestoreapi.com/products")
        promiseObject.then((res)=>{
            console.log("res");
            console.log(res.data);
        }).catch((error)=>{
            console.log("error");
            console.log(error);
        })
    };
    return (
        <div style={{padding:"50px"}}>
            <h2 style={{marginBottom:"20px"}}>All Products</h2>
            <p style={{marginBottom:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum quos dolor corrupti accusamus fugiat dolore voluptatem neque corporis accusantium natus vel delectus, impedit ratione quae autem reprehenderit eius officia laborum possimus tempore nemo! Unde provident nemo similique quia deserunt consectetur voluptatibus tempora vero vel, sed repellat non alias harum, delectus, iusto odit molestiae accusantium voluptatem libero aperiam ab soluta nulla veniam. Dicta suscipit corrupti quisquam excepturi odit voluptatem at voluptatum quod sequi, aliquid nisi sit quos distinctio veritatis inventore ab quibusdam quasi nostrum dolor corporis! Itaque, quia quae! Voluptas nostrum, illo eveniet sed qui ipsa dicta porro. Vitae fuga rerum nulla fugit voluptatibus, perspiciatis aperiam ea, quae tempora ducimus magnam, voluptatem vel alias. Minima nostrum eius tenetur facilis ad quae impedit sapiente optio iste excepturi animi, nam nulla nobis esse amet assumenda delectus perferendis? Dolore non veniam quo voluptatem explicabo, iusto distinctio nesciunt, dolorum impedit pariatur ipsa quaerat. Sint?</p>
            <button onClick={getProducts}>Get Products</button>
        </div>
    );
}

export default AllProducts