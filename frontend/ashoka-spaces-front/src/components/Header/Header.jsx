import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
<header
  className="position-relative text-white"
  style={{
    backgroundImage: "url('https://source.unsplash.com/1600x900/?house,building')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
  }}
>
  {/* Overlay for readability */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  ></div>

  {/* Navbar */}
  <div className="position-relative">
    <Navbar />
  </div>

  {/* Hero Content */}
  <div className="d-flex flex-column justify-content-center align-items-center text-center position-relative h-100 px-3">
    <h1 className="fw-bold mb-3">The Simplest Way to Find Properties</h1>
    <p className="mb-4">
      Discover your dream home with ease. Search, compare, and explore properties in just a few clicks.
    </p>

    <form className="d-flex justify-content-center">
      <div className="input-group" style={{ maxWidth: "500px" }}>
        <input
          type="text"
          className="form-control rounded-start"
          placeholder="Search for properties..."
        />
        <button className="btn btn-primary rounded-end" type="submit">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  </div>
</header>

  );
}

export default Header;
