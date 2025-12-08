import { useState } from "react";
import agentsData from "./agentsData";

export default function Agents() {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(agentsData.length / itemsPerPage);

  const [page, setPage] = useState(0);

  const visibleAgents = agentsData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <>
      <div className="container mb-4">
        <h3 className="text-center">Agents</h3>
        <h1 className="text-center">Our Agents</h1>
      </div>

      <div className="container testimonial-wrapper">
        <div className="row">
          {visibleAgents.map((a) => (
            <div className="col-md-3 col-sm-6 mb-4" key={a.id}>
              <div className="testimonial p-3 text-center">
                <img
                  src={a.image}
                  alt={a.name}
                  className="testimonial-img img-fluid mb-3"
                />

                <p className="testimonial-text">{a.text}</p>

                <h4 className="testimonial-name">{a.name}</h4>

                <small className="testimonial-profession">
                  {a.profession}
                </small>
              </div>
            </div>
          ))}
        </div>

        {/* Bullets */}
        <div className="bullets text-center mt-3">
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              className={`bullet ${page === i ? "active" : ""}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
