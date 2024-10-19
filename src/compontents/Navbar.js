import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'; // لاستيراد ملف CSS
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      
      {/* Hamburger Icon for mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Desktop Nav Links */}
      <ul className="nav-links">
        <li><a href="#home"><Link to="/Hhome">HOME</Link></a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#create">CREATE YOUR EVENT</a></li>
        <li><a href="#events">EVENTS</a></li>
        <li><a href="#tickets">TICKETS</a></li>
        <li><a href="#blogs">BLOGS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      {/* Desktop Auth Buttons */}
      <div className="auth-buttons">
        <button className="sign-in"><Link to="/login" className="singgg">Login</Link></button>
        <button className="sign-up"><Link to="/Signup" className="singgg">Sign in</Link></button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-menu" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#create">CREATE YOUR EVENT</a>
        <a href="#events">EVENTS</a>
        <a href="#tickets">TICKETS</a>
        <a href="#blogs">BLOGS</a>
        <a href="#contact">CONTACT</a>
        <button className="sign-inn"><Link to="/login" className="singgg">Login</Link></button>
        <button className="sign-upp"><Link to="/Signup" className="singgg">Sign in</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;