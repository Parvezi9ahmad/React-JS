import axios from "axios";

export const getAllProducts = () => {
    axios.get("https://fakestoreapi.com/products")
        .then((res) => { console.log(res) })
        .catch((error) => { console.log(error) })
}