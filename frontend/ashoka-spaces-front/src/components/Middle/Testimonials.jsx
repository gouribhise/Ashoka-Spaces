import { useState } from "react";
import { TestimonialsData } from "./TestimonialsData";
 

export default function Testimonials() {

  const itemsPerPage = 4;
  const totalPages = Math.ceil(TestimonialsData.length / itemsPerPage);

  const [page, setPage] = useState(0);

  const visibleTestimonials = TestimonialsData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <>
    <div className="container">
        <h3 className="text-center">Testimonials</h3>
        <h1 className="text-center">Happy Clients</h1>
    </div>
     <div className="container testimonial-wrapper">
      <div className="testimonial-container">

        {visibleTestimonials.map((t) => (
         <div className="testimonial" key={t.id}>

  {/* TOP QUOTE */}
  <p className="testimonial-text">{t.quote}</p>

  {/* BOTTOM SECTION */}
  <div className="testimonial-bottom">
    <div className="testimonial-left">
      <img src={t.image} alt={t.name} className="testimonial-img" />
    </div>

    <div className="testimonial-right">
      <h4 className="testimonial-name">{t.name}</h4>
      <small className="testimonial-profession">{t.profession}</small>
    </div>
  </div>

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
