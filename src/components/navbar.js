import React, { useState } from 'react';
import { FaAlignJustify} from 'react-icons/fa';
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">KYC Hub</a>
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="navbar-profile">
                <a href="/">Profile</a>
            </div>
            <div className="navbar-hamburger" onClick={toggleMobileMenu}>
            <FaAlignJustify />
            </div>
        </nav>
    );
};

export default Navbar;
