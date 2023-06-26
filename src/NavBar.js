import React from "react"
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
    return (
        <nav className="NavBar navbar-expand-lg navbar navbar-custom">
            <Link to="/" className="navbar-text"> Home </Link>
            <Link to="/Skills" className="navbar-text"> Skills </Link>
            <Link to="/Experience" className="navbar-text"> Experience </Link>
            <Link to="/Projects" className="navbar-text"> Projects </Link>
        </nav>);
  }

export default NavBar;







