import { useState } from "react";
import blogData from "./blogData";

export default function Blog() {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const [page, setPage] = useState(0);

  const visibleBlogs = blogData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <>
      <div className="container mb-4">
        <h3 className="text-center">Blog</h3>
        <h1 className="text-center">Recent Blogs</h1>
      </div>

      <div className="container testimonial-wrapper">
        <div className="row">
          {visibleBlogs.map((t) => (
            <div className="col-md-3 col-sm-6 mb-4" key={t.id}>
              <div className="testimonial p-3 text-center">
                <img src={t.image} alt={t.name} className="testimonial-img img-fluid mb-3" />

                <p className="testimonial-text fw-bold">{t.title}</p>

                <h4 className="testimonial-name">{t.name}</h4>

                <p className="small">{t.shortDesc}</p>

                <p className="text-muted small"><i class="bi bi-calendar"></i>
                {t.date} {t.author}</p>

                <p className="text-muted small"><i class="bi bi-chat-dots"></i>
                {t.comments}</p>
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
