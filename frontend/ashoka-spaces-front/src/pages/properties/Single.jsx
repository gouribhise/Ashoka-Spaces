import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Single() {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/property/${id}`)
      .then(res => res.json())
      .then(result => {
        console.log("API RESPONSE:", result);
        setProperty(result.data);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{property.title}</h1>
      <p><b>Type:</b> {property.type}</p>
      <p><b>Purpose:</b> {property.purpose}</p>
      <p><b>City:</b> {property.city}</p>
      <p><b>Area:</b> {property.area}</p>
      <p><b>Price:</b> ₹{property.price}</p>

      <img src={property.image} alt={property.title} width="300" />
    </>
  );
}

export default Single;
