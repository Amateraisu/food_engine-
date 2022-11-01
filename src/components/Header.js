import React, { Component } from "react";
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./header.css";
import { auth } from "./../firebase";
import { getAuth, signOut } from "firebase/auth";

const handleSignOut = () => {
    console.log("Clicked");
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
};

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="topnav container">
                <NavLink className="nav-link" to="/events">
                    <img
                        src="/bibimbap.png"
                        height="45"
                        width="45"
                        alt="userimg"
                    />
                </NavLink>
                <a class="appName">FOOD ENGINE</a>
                <div className="topnav-right">
                    <NavLink className="nav-link" to="/home">
                        <img
                            src="/user1.png"
                            height="45"
                            width="45"
                            alt="userimg"
                        />
                    </NavLink>
                    <NavLink className="nav-link" to="/search">
                        <img
                            src="/location1.png"
                            height="40"
                            width="40"
                            alt="locationimg"
                        />
                    </NavLink>
                    <button onClick={handleSignOut}>Sign out button</button>
                </div>
            </div>
        );
    }
}

export default Header;
