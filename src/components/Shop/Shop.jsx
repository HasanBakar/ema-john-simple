import React from 'react';
import "./Shop.css";
import { useState,useEffect } from 'react';

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
                <h1>Products are coming soon....{products.length}</h1>
            </div>
            <div className="order_summary">
                <h2>Order Summary</h2>
            </div>
            
        </div>
    );
};

export default Shop;