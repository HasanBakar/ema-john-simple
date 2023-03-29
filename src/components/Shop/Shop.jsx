import React from 'react';
import "./Shop.css";
import { useState,useEffect } from 'react';
import Products from './../Products/Products';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("products.JSON")
      .then(res =>res.json())
      .then(data => setProducts(data))
    }, [])
    
    return (
        <div className="shop_container">
            <div className="products_container">
                {
                    products.map(product => <Products
                    key = {product.id}
                    product = {product}
                    ></Products>)
                }
            </div>
            <div className="order_summary">
                <h2>Order Summary</h2>
            </div>
            
        </div>
    );
};

export default Shop;