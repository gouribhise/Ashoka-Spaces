import { useState, useEffect } from "react";
import MainP from "./properties/MainP";
import Filters from "./properties/Filters";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    type: ""
  });

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then(res => res.json())
      .then(result => setProperties(result.data))
      .catch(err => console.error(err));
  }, []);

  const filteredProperties = properties.filter(p => {
    return (
      (filters.city === "" || p.city === filters.city) &&
      (filters.type === "" || p.type === filters.type)
    );
  });

  return (
    <>
      <h1>Properties</h1>
      <div className="row">
        <div className="col-md-4">
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="col-md-7">
          <MainP properties={filteredProperties} />
        </div>
      </div>
    </>
  );
}

export default Properties;
