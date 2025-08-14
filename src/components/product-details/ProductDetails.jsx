import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetails() {
    let { id ,price} = useParams();
    let productData = useSelector((storeData) => {
        return storeData.products.filter((product) => product.id == id);
    });
    
    console.log(productData);
    return (
        <div>
            <h2>ProductDetails :  {price}</h2>
            <img src={productData[0].image} width={500} height={300} />
        </div>
    );
}

export default ProductDetails;