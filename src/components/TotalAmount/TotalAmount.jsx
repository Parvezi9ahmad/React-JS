import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TotalAmount() {
    var cartProducts = useSelector((store) => {
        return store.productsReducer.cart;
    });

    const [subtotalAmount, setSubTotalAmount] = useState(0);

    var amount = 0;

    useEffect(() => {
        cartProducts.map((product) => product.price * product.count).forEach((amountOfProduct) => {
            amount = amount + amountOfProduct;
            setSubTotalAmount(amount);
        })

    }, [cartProducts])

    return (
        <div className='container-fluid p-3 bg-dark text-white'>
            <div className="row">
                <div className="col-12">
                    <h4 className='h4'>Total Order Amount Details :</h4>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-6">Sub total</div>
                <div className="col-6">${Math.round(subtotalAmount)}</div>
            </div>
            <hr />
            <div className="row my-3">
                <div className="col-6">Delivery Charge</div>
                <div className="col-6">$5</div>
            </div>
            <hr />
            <div className="row my-3">
                <div className="col-6">Tpotal Amount</div>
                <div className="col-6">${Math.round(subtotalAmount + 5)}</div>
            </div>
            <hr />
            <div className="row my-3">
                <div className="col-12">
                    <Link to="/checkout">
                        <button className='btn btn-primary px-5'>Proceed For Payment </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TotalAmount