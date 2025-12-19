function Filters({ filters, setFilters }) {
    return (
      <div className="pt-3">
        <h4>Filters</h4>
  
        <select
          value={filters.city}
          onChange={e =>
            setFilters({ ...filters, city: e.target.value })
          }
        >
          <option value="">All Cities</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
        </select>
  
        <br /><br />
  
        <select
          value={filters.type}
          onChange={e =>
            setFilters({ ...filters, type: e.target.value })
          }
        >
          <option value="">All Types</option>
          <option value="Flat">Flat</option>
          <option value="House">House</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>
    );
  }
  
  export default Filters;
  