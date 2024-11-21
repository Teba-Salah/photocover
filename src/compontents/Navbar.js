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
        <li><a href="#about"><Link to="/About">ABOUT</Link></a></li>
        <li><a href="#create"><Link to="/CreateYourEvent">Create Your Event</Link></a></li>
        <li><a href="#events"> <Link to="/Event">EVENTS</Link></a></li>
        <li><a href="#tickets"><Link to="/Ti">TICKETS</Link></a></li>
         <li><a href="#blogs"><Link to="/BBlogs">BLOGS</Link></a></li> 
        <li><a href="#contact"><Link to="/Contact">Contact</Link></a></li>
      </ul>

      {/* Desktop Auth Buttons */}
      <div className="auth-buttons">
        <button className="sign-in"><Link to="/login" className="singgg">Login</Link></button>
        
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
       
      </div>
    </nav>
  );
};

export default Navbar;