import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FilterSearch from "../components/Index/FilterSearch";
import PostCard from "../components/Index/PostCard";
import { useAtom } from "jotai";
import { userAtom } from "../App.jsx";
import home from "./IndexHome.module.css";

function IndexHome() {
  const [allPosts, setAllPosts] = useState({});
  const [user, setUser] = useAtom(userAtom);
  const [filterBy, setFilterBy] = useState({
    style: "",
    username: "",
    company_name: "",
    cost: 0,
  });

  useEffect(() => {
    fetch("/api/posts/")
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data.data);
      });
  }, []);

  const userData = user.data

  if (Object.keys(allPosts).length < 1) {
    return "loading";
  } else {
    return (
      <>
        <div className={home.container}>
          <div className={home.login}>
            {user.status === "success" ? (
              <Link to={`/profile/${userData.username}/${userData._id}`}>
              <p>{userData.username}</p>
              </Link>
            ) : (
              <>
                <Link to="/sign-up">Sign Up</Link>
                <p>/</p>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
          <div className={home.title}>
            {/* clip-text--no-textzone をクラスに追加すると黒なしになる*/}
            <div className={home.cliptext}><p>HO & ME</p>
            <p className={home.smalltext}>Where the Ho & Me live together</p>
            </div>
          </div>
          <div className={home.filtersearch}>
            <FilterSearch filterBy={filterBy} setFilterBy={setFilterBy} />
          </div>

          <div className={home.container}>
            {/* set up filter method to fetch remaining data regardless of search history. */}
            {allPosts.map((ele, index) => {
              return <PostCard post={ele} key={index} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default IndexHome;
