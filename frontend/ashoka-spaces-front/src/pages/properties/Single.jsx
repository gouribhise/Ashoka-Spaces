import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Single() {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/property/${id}`)
      .then(res => res.json())
      .then(result => setProperty(result.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>{property.title}</h1>
        <img
          src={property.image}
          alt={property.title}
          width="300"
          className="img-fluid"
        />

        <p><b>Type:</b> {property.type}</p>
        <p><b>Purpose:</b> {property.purpose}</p>
        <p><b>City:</b> {property.city}</p>
        <p><b>Area:</b> {property.area}</p>
        <p><b>Price:</b> ₹{property.price}</p>

     
      </div>
    </div>
  );
}

export default Single;
