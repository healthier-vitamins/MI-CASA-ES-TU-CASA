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
      <Link to="/profile/:id">Profile</Link>
      <Link to="/show-post/:id">onClick event (ShowPost)</Link>
      <ShowCreatePost />
    </div>
  );
}

export default NavBar;
