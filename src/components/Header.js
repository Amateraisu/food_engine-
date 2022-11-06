import React, { Component } from "react";
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
} from "reactstrap";
import { useNavigate, Navigate, NavLink } from "react-router-dom";
import "./header.css";
import { auth } from "./../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "bootstrap";


const Header = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    
    const handleSignOut = () => {
        
        console.log("Clicked");
        signOut(auth)
            .then(() => {
                navigate("../home")
            })
            .catch((error) => {
                // An error happened.
            });
    };

    function logOutButton(user){
        if(user!=null){
            return(<button style={{border: 0, background: 0, margin:13}}><img
                        src="/logout.png"
                        height="40"
                        width="40"
                        alt="Log Out"
                        onClick={handleSignOut}
                    /></button>)
        }
        else{
            return(<></>)
        }
        
        
    }

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
                <NavLink className="nav-link" to="/social">
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
                {logOutButton(currentUser)}
                
            </div>
        </div>
    );

}

export default Header;
