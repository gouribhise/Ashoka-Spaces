import { useState } from "react";
import blogData from "./blogData";
export default function Blog() {

  const itemsPerPage = 4;
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const [page, setPage] = useState(0);

  const visibleTestimonials = blogData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <>
    <div className="container">
        <h3 className="text-center">Blog</h3>
        <h1 className="text-center">Recent Blogs</h1>
    </div>
     <div className="testimonial-wrapper">
      <div className="testimonial-container">

        {visibleTestimonials.map((t) => (
          <div className="testimonial" key={t.id}>
            <img src={t.image} alt={t.name} className="testimonial-img" />

            <p className="testimonial-text">{t.title}</p>

            <h4 className="testimonial-name">{t.name}</h4>
            <p>{t.shortDesc}</p>
            <p>{t.date}</p>
            <p>{t.comments}</p>
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
