import React from 'react';
import "./Products.css"
const Products = ({product}) => {
    // console.log(product)
    const {img, name, seller, ratings, price} = product;
    return (
        <div className="product">
            <img src={img} alt="Product image" />
            <div className="product__details">
                <h5>{name}</h5>
                <p>Price $ {price} </p>
                <p>Manufacturer: {seller} </p>
                <p>Ratings: {ratings} Starts</p>
            </div>
            <button className="btn_addTo_cart" >Add to Cart</button>
        </div>
    );
};

export default Products;