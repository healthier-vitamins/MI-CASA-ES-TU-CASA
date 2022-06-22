import { Link } from "react-router-dom";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";
import nav from "./NavBar.module.css";

function NavBar() {
  const [user, setUser] = useAtom(userAtom);
  const ShowCreatePost = () => {
    if (Object.keys(user).length > 0) {
      return <Link to="/create-post">Create Post</Link>;
    } else {
      return null;
    }
  };

  return (
    <div className={nav.navbar}>
      <Link className={nav.home} to="/">H</Link>
      <Link to="/sign-up/">Sign Up/Login</Link>
      <Link to="/profile/:username/:id">Profile</Link>
      <Link to="/show-post/:id">onClick event (ShowPost)</Link>
      <ShowCreatePost />
      <div className={nav.login}>
            {user.status === "success" ? (
              <Link to={`/profile/${user.data.username}/${user.data._id}`}>
              <p>{user.data.username}</p>
              </Link>
            ) : (
              <>
                <Link to="/sign-up">Sign Up</Link>/<Link to="/login">Login</Link>
              </>
            )}
          </div>
    </div>
  );
}

export default NavBar;
