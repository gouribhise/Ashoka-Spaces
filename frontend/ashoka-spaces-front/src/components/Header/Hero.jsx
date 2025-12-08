import React from "react";

function Hero() {
  return (
    <section className=" d-flex align-items-center" style={{ height: "80vh" }}>
      <div className="container text-center">
        {/* Heading */}
        <h1 className="fw-bold mb-3">The Simplest Way to Find Properties</h1>

        {/* Paragraph */}
        <p className="mb-4">
          Discover your dream home with ease. Search, compare, and explore
          properties in just a few clicks.
        </p>

        {/* Search box */}
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
    </section>
  );
}

export default Hero;
