import filter from "./FilterSearch.module.css"

function FilterSearch({ filterBy, setFilterBy, setAllPosts }) {
  //! not completed

  const handleChange = (e) => {
    const value = e.target.value;

    setFilterBy({ ...filterBy, [e.target.name]: value });
  };

  const handleSubmit = () => {
    const { style, username, company_name, cost } = filterBy;
    fetch(
      `/api/posts/filter/search?style=${style}&username=${username}&cost=${cost}&company_name=${company_name}`
    )
      // fetch(`/api/posts/filter/${encodeURIComponent(style)}/${encodeURIComponent(username)}/${encodeURIComponent(cost)}/${encodeURIComponent(company_name)}`)
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data)
        console.log("DATAAAAAAAA", data)
      });
  };

  return (
    <div className={filter.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="select-style">Style: </label>
        <select
          name="style"
          id="select-style"
          value={filterBy.style}
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
        <label htmlFor="company_name">Company Name:</label>
        <input
          name="company_name"
          id="company_name"
          value={filterBy.company_name}
          placeholder={"Company Name"}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="select-price">Cost: </label>
        <input
          name="cost"
          id="select-cost"
          value={filterBy.cost}
          placeholder="Cost"
          onChange={handleChange}
        ></input>
      </form>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default FilterSearch;
