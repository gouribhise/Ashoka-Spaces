import React from "react";
 
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 px-4">
      {/* Logo with left spacing */}
      <a className="navbar-brand fw-bold me-5" href="#">
        Ashoka Spaces
      </a>

      {/* Mobile Hamburger */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu Items */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-4">
          <li className="nav-item">
            <Link to="/" className="nav-link" href="#">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/agents" className="nav-link" href="#">Agent</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" href="#">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/properties" className="nav-link" href="#">Properites</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
