function FilterSearch({ filterBy, setFilterBy }) {
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", e);
    setFilterBy({ ...filterBy, [e.target.name]: value });
  };

  const handleSubmit = () => { 
    console.log(filterBy)
    // will need to send to fetch data
  }


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
          <br />
          <label htmlFor="select-username">Username: </label>
          <input
            name="username"
            id="select-username"
            value={filterBy.username}
            placeholder="Username"
            onChange={handleChange}
          ></input>

          <br />
          <label htmlFor="select-price">Price: </label>
          <input
            name="price"
            id="select-id"
            value={filterBy.price}
            placeholder="Price"
            onChange={handleChange}
          ></input>
        </fieldset>
      </form>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default FilterSearch;
