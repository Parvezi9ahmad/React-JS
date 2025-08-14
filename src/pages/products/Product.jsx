import React from 'react'

function Product({id, image, title,price}) {
    return (
        <div className="card" key={id}>
            <div className="card-header">
                <img src={image} width={250} height={300} />
               
            </div>
            <div className="card-body">
                <h5 className='h5'>{title}</h5>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Product