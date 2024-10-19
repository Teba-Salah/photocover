
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p  >Stay up-to-date with the latest trends, strategies, and ideas in the world of business and leadership.</p>
         
          <button className='foo'>JOIN NOW</button>
        </div>

        <div className="footer-section">
          <h4>EVENTIFY</h4>
          <ul>
            <li>About Us</li>
            <li>All Events</li>
            <li>Community</li>
            <li>Sponsor</li>
            <li>Gallery</li>
            <li>Speakers</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>QUICK LINK</h4>
          <ul>
            <li>Upcoming Event</li>
            <li>All Events</li>
            <li>Blogs</li>
            <li>Ticket</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>LEGAL</h4>
          <ul>
            <li>Terms and Conditions</li>
            <li>License Agreement</li>
            <li>Privacy Policy</li>
            <li>Copyright Information</li>
            <li>Cookies Policy</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="text">Copyright © 2023 Eventify, All rights reserved.</p>
        <div className="social-icons">
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;