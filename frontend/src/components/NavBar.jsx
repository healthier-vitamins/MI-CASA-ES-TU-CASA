import { Link } from "react-router-dom";

function NavBar () {
    return (
        <>
        <Link to="/" >Home Page</Link>
        <Link to="/sign-up/">Sign Up/Login</Link>
        <Link to="/profile/:id">Profile</Link>
        <Link to="/show-post/:id">onClick event (ShowPost)</Link>
        {/* if logged in */}
        <Link to="/create-post">Create Post</Link>
        </>
    )
}

export default NavBar;