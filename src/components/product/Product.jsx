import { useNavigate } from "react-router-dom"

function Product({ id, image, title, price }) {
    const navigate = useNavigate();
    const navigateToProductDetails = (id) => {
        navigate(`/productdetails/${id}`)
    }
    return (
        <div className="card" key={id}>
            <div className="card-header">
                <img src={image} width={250} height={300} />

            </div>
            <div className="card-body">
                <h5 className='h5'>{title}</h5>
                <p>${price}</p>
                <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <button className='btn btn-outline-dark mx-2' onClick={() => {
                    navigateToProductDetails(id);
                }}>Product Details</button>
                <button className='btn btn-outline-success mx-2'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product