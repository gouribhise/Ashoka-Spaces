import { useState } from "react";
import agentsData from "./agentsData"; 

export default function Agents() {

  const itemsPerPage = 4;
  const totalPages = Math.ceil(agentsData.length / itemsPerPage);

  const [page, setPage] = useState(0);

  const visibleTestimonials = agentsData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <>
    <div className="container">
        <h3 className="text-center">Agents</h3>
        <h1 className="text-center">Our Agents</h1>
    </div>
     <div className="testimonial-wrapper">
      <div className="testimonial-container">

        {visibleTestimonials.map((t) => (
          <div className="testimonial" key={t.id}>
            <img src={t.image} alt={t.name} className="testimonial-img" />

            <p className="testimonial-text">{t.text}</p>

            <h4 className="testimonial-name">{t.name}</h4>

            <small className="testimonial-profession">
              {t.profession}
            </small>
          </div>
        ))}

      </div>

      {/* Bullets */}
      <div className="bullets">
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
