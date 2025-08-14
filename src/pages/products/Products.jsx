import "./products.css"
import { useEffect } from "react"
import { getAllProducts, getDataCategoryWise } from "./service/ProductsService"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Product from "./Product";



function Products() {
    const dispatch = useDispatch();
    const productsData = useSelector((store) => {
        return store.productsReducer.data;
    })
    useEffect(() => {
        if (productsData.length === 0) {
            getAllProducts(dispatch);
        }
    }, [])

    return (
        <div>
            <div className="options">
        <div>
          <input
            type="radio"
            name="products"
            defaultChecked
            onChange={() => {
              getAllProducts(dispatch);
            }}
          />
          <label>All</label>
        </div>
        <div>
          <input
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "electronics");
            }}
          />
          <label>Electronics</label>
        </div>
        <div>
          <input
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "jewelery");
            }}
          />
          <label>Jewelery</label>
        </div>
        <div>
          <input
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "men's clothing");
            }}
          />
          <label>MensWear</label>
        </div>
        <div>
          <input
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "women's clothing");
            }}
          />
          <label>WomensWear</label>
        </div>
      </div>

            <div className='products'>
                {
                    productsData.map((product) => {
                        return <Product id={product.id} image={product.image} title={product.title} price={product.price}/>
                    })
                }
            </div>
        </div>
    )
}

export default Products