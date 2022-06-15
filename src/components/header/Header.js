import React from "react";
import "./Header.css";
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <h1>Milieu Navigator</h1>
        </div>
    );
};

export default Header;