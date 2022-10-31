import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="NavBar">
            <NavLink exact to='/'>Vending Machine</NavLink>
            <NavLink exact to='/soda'>Soda</NavLink>
            <NavLink exact to='/chips'>Chips</NavLink>
            <NavLink exact to='/sardines'>Sardines</NavLink>
        </nav>
    )
}

export default Navbar