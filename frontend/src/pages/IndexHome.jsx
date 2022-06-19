import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FilterSearch from "../components/Index/FilterSearch";
import PostCard from "../components/Index/PostCard";

function IndexHome() {
  const [allPosts, setAllPosts] = useState({});
  const [filterBy, setFilterBy] = useState({
    categories: "minimalist",
    username: "",
    price: "",
  });

  useEffect(() => {
    fetch("/api/posts/")
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data.data);
      });
  }, []);

  if (Object.keys(allPosts).length < 1) {
    return "loading";
  } else {

    return (
      <>
        <div className="index-title">
          <h1>Ho & Me</h1>
          <p>Where the Ho & Me live together</p>
          <Link to="/sign-up">Sign Up/Login</Link>
          <FilterSearch filterBy={filterBy} setFilterBy={setFilterBy} />
        </div>
        <div className="index-container">
          {/* set up filter method to fetch remaining data regardless of search history. */}
          {allPosts.map((ele, index) => {
            return <PostCard post={ele} key={index} />
          })}
          
        </div>
      </>
    );
  }
}

export default IndexHome;
