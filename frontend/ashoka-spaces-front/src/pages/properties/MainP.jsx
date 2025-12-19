import { useState } from "react";
function MainP({properties}){
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = properties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(properties.length / itemsPerPage);


    return (
        <>
     {currentProperties.map(p => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: "10px" }}>
            <img src={p.image}/>
          <h3>{p.title}</h3>
          
          <p>{p.city} - {p.area}</p>
          <p>Size -{p.size}</p>
          <p>Type - {p.type}</p>
          <p><strong>Price: </strong>₹ {p.price}</p>
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
    )
}

export default MainP