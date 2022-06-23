import { Link } from "react-router-dom"

function UserPosts({ userPosts }) {

    if (userPosts.length < 1) {
        return "this user has no posts :(";
    } else {
    return (
    <div className="user-posts">
    { userPosts?.map((userPosts) => (
      <div className="post-card">
      <img className="post-placeholder-img" src={userPosts.img[0]}/>
      <p className="post-card-title">{userPosts.title}</p>
      <p id="description">{userPosts.short_description}</p>
      <Link className="profile-link" to={`/show-post/${userPosts._id}`}>Read more</Link>
      </div>
    ))}
</div>
)};
}
export default UserPosts;