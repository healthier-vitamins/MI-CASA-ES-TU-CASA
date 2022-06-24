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
  const [titleState, setTitleState] = useState(false);
  const [user, setUser] = useAtom(userAtom);
  const [filterBy, setFilterBy] = useState({
    style: "",
    username: "",
    company_name: "",
    cost: 0,
  });
  // console.log(titleState);
  useEffect(() => {
    fetch("/api/posts/")
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data);
      });
  }, []);

  // const userData = user.data;

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // if (Object.keys(allPosts).length < 1) {
  //   return "loading";
  // } else {

  const EmptyFilterResult = () => {
    // console.log(allPosts?.data);
    if (allPosts.data) {
      if (allPosts?.data[0] === "No posts found") {
        return (
          <div className={home.empty}>
            <p>No posts found</p>
          </div>
        );
      } else {
        return allPosts?.data.map((ele, index) => {
          return <PostCard post={ele} key={index} />;
        });
      }
    }
  };

  // console.log("user ATOM", user?.data)

  return (
    <>
      <div className={home.container}>
        <div className={home.title}>
          <div
            className={
              !titleState
                ? `${home.cliptext}`
                : `${home.cliptext} ${home.cliptextNoTextzone}`
            }
          >
            <p>
              HO
              <span
                onMouseEnter={() => setTitleState(true)}
                onMouseLeave={() => setTitleState(false)}
              >
                &
              </span>
              ME
            </p>
            <p className={home.smalltext}>Where Ho & Me live together</p>
          </div>
        </div>
        {Object.keys(allPosts).length < 1 ? (
          "loading"
        ) : (
          <>
            <div className={home.filtersearch}>
              <FilterSearch
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                setAllPosts={setAllPosts}
              />
            </div>
          </>
        )}
        <div className={home.card_container}>
        <EmptyFilterResult />
        </div>
      </div>
      <button className={home.topbutton} onClick={returnTop}>
        Return to Top
      </button>
    </>
  );
}

export default IndexHome;
