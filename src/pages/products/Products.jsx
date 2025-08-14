import "./products.css"
import { useEffect } from "react"
import { getAllProducts, getDataCategoryWise } from "./service/ProductsService"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";



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
        <div className="form-check">
          <input className="form-check-input"
            type="radio"
            name="products"
            defaultChecked
            onChange={() => {
              getAllProducts(dispatch);
            }}
          />
          <label className="form-check-label">All</label>
        </div>
        <div className="form-check">
          <input className="form-check-input"
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "electronics");
            }}
          />
          <label className="form-check-label">Electronics</label>
        </div>
        <div className="form-check">
          <input className="form-check-input"
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "jewelery");
            }}
          />
          <label className="form-check-label">Jewelery</label>
        </div>
        <div className="form-check">
          <input className="form-check-input"
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "men's clothing");
            }}
          />
          <label className="form-check-label">MensWear</label>
        </div>
        <div className="form-check">
          <input className="form-check-input"
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "women's clothing");
            }}
          />
          <label className="form-check-label">WomensWear</label>
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