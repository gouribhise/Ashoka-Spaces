import React from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink
            to="/"
            end   //
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/agents"
            
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
Agent          </NavLink>
<NavLink
            to="/services"
            
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
Services          </NavLink>
<NavLink
            to="/properties"
            
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
Properties          </NavLink>
<NavLink
            to="/contact"
            
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
Contact          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
