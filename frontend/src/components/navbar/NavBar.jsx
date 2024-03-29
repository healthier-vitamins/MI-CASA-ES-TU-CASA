import { Link } from "react-router-dom";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";
import nav from "./NavBar.module.css";

function NavBar() {
  const [user, setUser] = useAtom(userAtom);
  const ShowCreatePost = () => {
    if (Object.keys(user).length > 0) {
      return (
        <Link className={nav.text} to="/create-post">
          Create New Post
        </Link>
      );
    } else {
      return null;
    }
  };

  //! extra profile link (not needed)
  // const ShowProfileLink = () => {

  //   if (user?.data?.username) {
  //     return <Link className={nav.text} to={`/profile/${user?.data?.username}/${user?.data?._id}`}>
  //       Profile{" "}
  //     </Link>;
  //   } else {
  //     return null
  //   }
  // };

  const LogoutButton = () => {
    function handleLogout() {
      setUser(false);
    }
    return <button onClick={handleLogout}>Logout</button>;
  };

  return (
    <div className={nav.navbar}>
      <Link className={nav.home} to="/">
        <span className={nav.perspectiveH}>H</span>
        <span className={nav.perspectiveM}>M</span>
      </Link>
      {/* extra link on homepage (not needed) */}
      {/* <Link className={nav.text} to="/sign-up/">
        Sign Up/Login
      </Link> */}
      {/* <ShowProfileLink /> */}

      <div className={nav.login}>
        <ShowCreatePost />
        {/* Object.keys(user).length > 0 */}
        {user?.data?.username ? (
          <>
            <Link
              className={nav.text}
              to={`/profile/${user.data.username}/${user.data._id}`}
            >
              <p className={nav.text}>{user.data.username}</p>
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link className={nav.text} to="/sign-up">
              Sign Up
            </Link>
            /
            <Link className={nav.text} to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
