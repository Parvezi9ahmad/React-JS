import { useSelector } from "react-redux"

function Cart() {
    const cartdata = useSelector((store) => {
        return store.productsReducer.cart
    });
    return (
        <div>

            {
                cartdata.length > 0 ? <div>
                    {
                        cartdata.map((cartproduct) => {
                            return <div className="mt-5 text-center w-75 mx-auto text-center" key={cartproduct.id} style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div><img src={cartproduct.image} width={70} height={70} /></div>
                                <div>  <h4 className="h6">{(cartproduct.title).slice(0,15)}</h4></div>
                                <div>  <p>${cartproduct.price}</p> </div>
                                <div>
                                    <button className="btn btn-danger px-2 mx-2">-</button>
                                    <span>0</span>
                                    <button className="btn btn-success px-2 mx-2">+</button>
                                </div>
                                <div>
                                    <button className="btn btn-danger px-3 py-3">Remove</button>
                                </div>
                            </div>
                        })
                    }
                </div> :
                    <div className="mt-5 display-3 fw-bold text-center text-warning">No Products added in the cart</div>
            }

        </div>
    )
}

export default Cart