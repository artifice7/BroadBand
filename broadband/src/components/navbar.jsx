import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">BroadBand</Link>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/services">Services</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;