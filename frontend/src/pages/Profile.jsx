import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserPosts from "../components/Profile/UserPosts";
import UserLikes from "../components/Profile/UserLikes";
import "./Profile.css";

function Profile() {
  // set use profile data
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});

  // user profile details
  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserProfile(data);
        console.log(data);
      });
  }, []);

  //user's posts
  const { username } = useParams();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch(`/api/posts/prof/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserPosts(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <div className="user-profile">
      {/* <button onClick={handleEdit}>Edit</button> */}

      {/* user profile details */}
      <h1 className="profile-user">{userProfile.username}</h1>

      <div className="user-profile-header-1">
        <img className="profile-pic" src={userProfile.profileImg} />

        <div className="user-profile-header-2">
          <h2 className="profile-name">
            {userProfile.firstName} {userProfile.lastName}
          </h2>
          <h3>Number of posts: {userPosts.length}</h3>
          <h3>
            Get in touch: {userProfile.email}
          </h3>
        </div>
      </div>

    <hr />

      {/* user's posts */}
    <h2 className="profile-user">{userProfile.username}'s posts</h2>
      <UserPosts userPosts={userPosts} />
    

      {/* user's likes */}
      {/* <div className="user-liked-posts">
        <h3>{userProfile.username}'s' likes</h3>
        <UserLikes />
      </div> */}
    </div>
  );
}

export default Profile;
