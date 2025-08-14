import react from "react";
import "./Products.css"
import { Link, Outlet } from 'react-router-dom'
function Products() {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "20px", color: "green" }}>Products Components</h1>
            <div className="productsContainer">
                <div className="linksContainer">
                    <Link to="electronics" style={{color:"white", textDecoration:"none", fontSize:"21px"}}>Electronics</Link>
                    <Link to="jewelery" style={{color:"white", textDecoration:"none", fontSize:"21px"}}>Jewelery</Link>
                    <Link to="menc" style={{color:"white", textDecoration:"none", fontSize:"21px"}}>Men'sClothing</Link>
                    <Link to="womenc" style={{color:"white", textDecoration:"none", fontSize:"21px"}}>Women'sClothing</Link>
                </div>
                <div className="componentsContainer">
                    <Outlet/>
                </div>
            </div>

        </div>
    );
}

export default Products