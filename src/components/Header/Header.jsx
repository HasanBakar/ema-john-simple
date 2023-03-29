import React from 'react';
import "./Header.css";
import logo from "../../assets/images/Logo.svg";
const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <a href="/order">Orders</a>
                <a href="/order-review">Orders Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;