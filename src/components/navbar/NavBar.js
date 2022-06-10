import React from "react";
import "./NavBar.css";
import user from '../../assets/user.svg';

class NavBar extends React.Component {
    state = {  } 

    render() {
        return (
            // create a navbar with an user icon, name in the center and a burger icon
            <nav className="navbar">
                <div className="navbar-user item">
                    <img src={user} alt="user"/>
                </div>
                <h1 className="navbar-name item" >Dashboard</h1>
                <div className="navbar-menu item">
                    <div className="burger" />
                    <div className="burger" />
                    <div className="burger" />
                </div>
            </nav>
        );
    }
}

export default NavBar;