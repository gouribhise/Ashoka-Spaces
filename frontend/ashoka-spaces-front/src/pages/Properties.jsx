import { useState, useEffect } from "react";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then(res => res.json())
      .then(result => setProperties(result.data))
      .catch(err => console.error(err));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = properties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(properties.length / itemsPerPage);

  return (
    <>
      <h1>Properties</h1>

      {currentProperties.map(p => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: "10px" }}>
          <h3>{p.title}</h3>
          <p>{p.city} - {p.area}</p>
          <p>₹ {p.price}</p>
        </div>
      ))}

      {/* Pagination */}
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            style={{
              margin: "5px",
              padding: "6px 12px",
              background: currentPage === number ? "#333" : "#eee",
              color: currentPage === number ? "#fff" : "#000",
              border: "none",
              cursor: "pointer"
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
}

export default Properties;
