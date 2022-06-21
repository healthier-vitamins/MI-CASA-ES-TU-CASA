import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Profile.css"

function Profile() {
    const { id } = useParams();
    const [ userProfile, setUserProfile ] = useState({});

    useEffect(() => {
        fetch(`/api/users/username/${id}`)
        .then((response) => response.json())
        .then((data) => {setUserProfile(data)
            console.log(data)
        });
    }, []);
    
    return (
        <div className="user-profile"> 
        <button>Edit</button>
        <div className="user-profile-header">
            <img className="profile-pic" src={userProfile.profileImg}/>
            <h2 className="profile-name">{userProfile.firstName} {userProfile.lastName}</h2>
            <h3 className="profile-user">(@{userProfile.username})</h3>
                <img id="insta" src="https://i.imgur.com/36GYym5.png"/>
            <div className="user-posts-likes">
                <p>Number of posts: {userProfile.postCount}</p>
                <p>Total likes: {userProfile.likeCount}</p>
            </div>
            {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
        </div>
        <div className="user-posts-col-left">
            <h4>{userProfile.username}'s Posts</h4>
            <div className="post-card">
                <img className="post-placeholder-img" src="https://i.imgur.com/TL68x25.jpg"/>
                <p className="post-card-title">title: i love my wife</p>
                <p>short-description: chaos and disorder</p>
                <Link className="profile-link" to="/show-post/:id">Read more</Link>
            </div>
            <div className="post-card">
                <img className="post-placeholder-img" src="https://i.imgur.com/TL68x25.jpg"/>
                <p className="post-card-title">title: i eat children</p>
                <p>short-description: yum yum</p>
                <Link className="profile-link" to="/show-post/:id">Read more</Link>
            </div>
        </div>
        <div className="user-liked-posts-col-right">
            <h4>{userProfile.username}'s Likes</h4>
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
        </div>
    )
}

export default Profile;