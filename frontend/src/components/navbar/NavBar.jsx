import { Link } from "react-router-dom";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";
import nav from "./NavBar.module.css";

function NavBar() {
  const [user, setUser] = useAtom(userAtom);
  const ShowCreatePost = () => {
    if (Object.keys(user).length > 0) {
      return <Link className={nav.text} to="/create-post">Create New Post</Link>;
    } else {
      return null;
    }
  };

  return (
    <div className={nav.navbar}>
      <Link className={nav.home} to="/">
        <span className={nav.perspectiveH}>H</span>
        <span className={nav.perspectiveM}>M</span>
      </Link>
      <Link className={nav.text} to="/sign-up/">Sign Up/Login</Link>
      <Link className={nav.text} to="/profile/:username/:id">Profile  </Link>
      {/* <Link to="/show-post/:id">onClick event (ShowPost)</Link> */}
      <div className={nav.login}>
      <ShowCreatePost />
            {Object.keys(user).length > 0 ? (
              <Link className={nav.text} to={`/profile/${user.data.username}/${user.data._id}`}>
              <p className={nav.text}>{user.data.username}</p>
              </Link>
            ) : (
              <>
                <Link className={nav.text} 
                to="/sign-up">Sign Up</Link>/<Link className={nav.text} to="/login">Login</Link>
              </>
            )}
          </div>
    </div>
  );
}

export default NavBar;
