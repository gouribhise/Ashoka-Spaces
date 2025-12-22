import { useState } from "react";

function Filters({ setFilters }) {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // apply filters only on submit
    setFilters({
      city: city.trim(),
      type: type.trim()
    });
  };
  console.log(city,type)

  return (
    <div className="pt-3">
      <h4>Filters</h4>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city (e.g. Pune)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter type (Flat, House, Commercial)"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <br /><br />

        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
}

export default Filters;
