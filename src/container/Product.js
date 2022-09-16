import React from 'react';
import {NavLink} from 'react-router-dom';
import './Product.css';

const Product = ()=>{
    return(
        <header>
            <nav>
            <NavLink to="/t-shirt" className="bg-primary ">
            <a href="#" className="text-light">Shooes</a>
            </NavLink>
            <NavLink to="/shirt" className="bg-primary"><a href="#" className="text-light ">T-shirt</a></NavLink>
            <NavLink to="/shooes" className="bg-primary"><a href="#" className="text-light ">All Product</a></NavLink>
            </nav>
        </header>
    )
}
export default Product;