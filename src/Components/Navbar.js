import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      {/* Left Logo + Company Name */}
      <div className="navbar-left">
        <Link to="/" className="brand">
          <img src={logo} alt="Welltouch Hygiene" className="navbar-logo" />
          <div className="company-text">
            <span className="company-main">WELLTOUCH</span>
            <span className="company-sub">HYGIENE PVT.LTD.</span>
          </div>
        </Link>
      </div>

      {/* Hamburger button (mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Right Menu */}
      <nav className={`navbar-right ${isOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/certificates" onClick={() => setIsOpen(false)}>Certificates</Link></li>
          <li><Link to="/clients" onClick={() => setIsOpen(false)}>Clients</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
