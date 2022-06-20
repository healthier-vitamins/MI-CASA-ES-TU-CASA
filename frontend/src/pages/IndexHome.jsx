import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FilterSearch from "../components/Index/FilterSearch";
import PostCard from "../components/Index/PostCard";
import "./IndexHome.css";

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
        <div className="index-login">
          <Link to="/sign-up">Sign Up</Link>/<Link to="/login">Login</Link>
        </div>
      <div className="index-container">
        <div className="index-title">
          {/* clip-text--no-textzone をクラスに追加すると黒なしになる*/}
        <div className="clip-text">
          HO & ME</div>
          <p>Where the Ho & Me live together</p>
        </div>
        <div className="filtersearch">  
          <FilterSearch filterBy={filterBy} setFilterBy={setFilterBy} />
        </div>

        <div className="index-container"  >
          {/* set up filter method to fetch remaining data regardless of search history. */}
          {allPosts.map((ele, index) => {
            return <PostCard post={ele} key={index} />
          })}
        </div>
      </div>
      </>
    );
  }
}

export default IndexHome;
