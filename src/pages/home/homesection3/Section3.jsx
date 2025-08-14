import "./Section3.css"

function Section3(props) {
    return (
        <div className='Section3'>
            <div>
                <img src={props.image} width="500" height="300" />
            </div>
            <div className='Section3Content'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit nobis excepturi libero eum, nostrum,
                    facilis in optio, eaque amet alias aut suscipit itaque ea. Animi quos fugit, magni, voluptas quibusdam consequuntur,
                    quaerat necessitatibus earum natus sapiente perspiciatis rem placeat.</p>
                <button>Product Details</button>
            </div>
        </div>
    )
}

export default Section3