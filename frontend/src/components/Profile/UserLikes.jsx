import { Link } from "react-router-dom";

function UserLikes() {
    return (
        <div className="user-liked-posts-col-right">
        <h4>User's Likes</h4>
        <div className="post-card">
            <img className="post-placeholder-img" src="https://i.imgur.com/TL68x25.jpg"/>
            <p className="post-card-title">title: i am hungry</p>
            <p>short-description: starving no yums</p>
            <Link className="profile-link" to="/show-post/:id">Read more</Link>
        </div>
        <div className="post-card">
            <img className="post-placeholder-img" src="https://i.imgur.com/TL68x25.jpg"/>
            <p className="post-card-title">title: kimye house</p>
            <p>short-description: before the divorce</p>
            <Link className="profile-link" to="/show-post/:id">Read more</Link>
        </div>
    </div>
    )
}

export default UserLikes;