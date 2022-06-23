// import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

function UserPosts({ userPosts }) {

    if (userPosts.length < 1) {
        return "loading";
    } else {
    return (
    
    <div>
    { userPosts?.map((userPosts) => (
    <>
      <div className="post-card">
      <img className="post-placeholder-img" src={userPosts.img}/>
      <p className="post-card-title">{userPosts.title}</p>
      <p>{userPosts.short_description}</p>
      <Link className="profile-link" to={`/show-post/${userPosts._id}`}>Read more</Link>
      </div>

    </>
    ))}
</div>
)};
}
export default UserPosts;