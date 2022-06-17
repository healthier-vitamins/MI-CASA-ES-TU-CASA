function FilterSearch({ filterBy, setFilterBy }) {
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", e);
    setFilterBy({ ...filterBy, [e.target.name]: value });
  };

  return (
    <div className="index-filter">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <fieldset>
          <label htmlFor="select-categories">Categories: </label>
          <select
            name="categories"
            id="select-categories"
            value={filterBy.categories}
            onChange={handleChange}
          >
            <option value="minimalist">Minimalist</option>
            <option value="industrial">Industrial</option>
            <option value="modern">Modern</option>
            <option value="scandinavian">Scandinavian</option>
          </select>
        </fieldset>
      </form>
      <button onClick={() => console.log(filterBy)}>Search</button>
    </div>
  );
}

export default FilterSearch;
