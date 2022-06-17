import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div className="navbar">
        <Link to="/" >Home Page</Link>
        <Link to="/credentials/:id">Sign Up/Login</Link>
        <Link to="/profile/:id">Profile</Link>
        <Link to="/show-post/:id">onClick event (ShowPost)</Link>
        {/* if logged in */}
        <Link to="/create-post">Create Post</Link>
        </div>
    )
}

export default NavBar;