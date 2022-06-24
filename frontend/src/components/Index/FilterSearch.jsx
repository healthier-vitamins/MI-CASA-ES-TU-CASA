import filter from "./FilterSearch.module.css";

function FilterSearch({ filterBy, reload, setFilterBy, setAllPosts, allPosts, setReloadFilter }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setFilterBy({ ...filterBy, [e.target.name]: value });

  };

  const handleSubmit = () => {
    // console.log(filterBy)
    const { style, username, company_name, cost } = filterBy;
    fetch(
      `/api/posts/filter/search?style=${style}&username=${username}&cost=${cost}&company_name=${company_name}`
    )
      // fetch(`/api/posts/filter/${encodeURIComponent(style)}/${encodeURIComponent(username)}/${encodeURIComponent(cost)}/${encodeURIComponent(company_name)}`)
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data);
        console.log("DATAAAAAAAA", data);
      });
  };

  const handleClear = () => {
    setFilterBy({
      style: "",
      username: "",
      company_name: "",
      cost: "",
    })

    fetch("/api/posts/")
    .then((res) => res.json())
    .then((data) => {
      setAllPosts(data)
      // setReloadFilter(true)
      // reload()
    })
    // setAllPosts(allPosts)
    // setReloadFilter(true)
    
  }

  return (
    <div className={filter.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="select-style">Style: </label>
        <input
          name="style"
          id="style"
          value={filterBy.style}
          onChange={handleChange}
        ></input>
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
      <button onClick={handleClear}>Clear Search</button>
    </div>
  );
}

export default FilterSearch;
