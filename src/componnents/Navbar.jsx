import React from "react";
import "../styles/Navbar.scss";
import logo from "../images/logo.png";


function navbar(){
    return (
         <nav className="navbar">

             <div className="navbarLogo">
                <img src={logo} alt="logo" />
             </div> 
                <ul>Accueil</ul>
                <ul>A Propos</ul>
    
        </nav>
    );
}

export default navbar;