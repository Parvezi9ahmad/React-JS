import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import "./productDetails.css";
import addtocartService from "../../pages/cart/CartService";

function ProductDetails() {
    const { id } = useParams();
    const cartData = useSelector((store) => {
        return store.productsReducer.cart;
    })
    const productDetails = useSelector((store) => {

        return store.productsReducer.data.filter((product) => product.id == id);
    });
    const dispatch = useDispatch();

      const addtocart = () => {
        addtocartService(productDetails[0], dispatch);
    }

    const removeCart = (id) => {
        dispatch({
            type: "REMOVE-CART",
            payload: id,
        })
    }
    return (
        <div className="productDetails">
            <div className="productImagePanel">
                <img src={productDetails[0].image} width={"100%"} height={400} alt="product" />
            </div>
            <div className="productContentPanel">
                <dl>
                    <dt>
                        <b>Product Name</b>
                    </dt>
                    <dd>
                        <b>{productDetails[0].title}</b>
                    </dd>
                    <dt>
                        <b>Price</b>
                    </dt>
                    <dd>
                        <b>{productDetails[0].price}</b>
                    </dd>
                    <dt>
                        <b>Description</b>
                    </dt>
                    <dd>
                        <b>{productDetails[0].description}</b>
                    </dd>
                    <dt>
                        <b>Category</b>
                    </dt>
                    <dd>
                        <b>{productDetails[0].category}</b>
                    </dd>
                    <dt>
                        <b>Rating</b>
                    </dt>
                    <dd>
                        <b>{productDetails[0].rating.rate}</b>
                    </dd>
                </dl>
                {cartData.length === 0 ? <button className='btn btn-outline-success mx-2' onClick={addtocart}>Add-to-Cart</button>
                    : (cartData.filter((cartproduct) => cartproduct.id == id))
                        .length > 0 ? (<button className='btn btn-danger mx-2' onClick={() => { removeCart(id) }}>Remove Cart</button>) :
                        (<button className='btn btn-outline-success mx-2' onClick={addtocart}>Add-to-Cart</button>)
                }
                <button className="btn btn-dark mx-2">Back To Products</button>
            </div>
        </div>
    )
}

export default ProductDetails