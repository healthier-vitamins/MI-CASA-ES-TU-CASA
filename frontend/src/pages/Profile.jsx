import { useParams } from "react-router-dom";
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
        <div className="user-profile-header">
            <img className="profile-pic" src={userProfile.profileImg}/>
            <h2 className="profile-user">{userProfile.firstName} {userProfile.lastName}</h2>
            <div className="user-posts-likes">
                <p>Number of posts: {userProfile.postCount}</p>
                <p>Total likes: {userProfile.likeCount}</p>
            </div>
        </div>
        <div className="user-posts-col-left">
            <h4>Joe Mama's Posts</h4>
            <div className="post-card">
                <img className="post-placeholder-img" src="https://i.imgur.com/TL68x25.jpg"/>
                <p className="post-card-title">title: i love my wife</p>
                <p>short-description: chaos and disorder</p>
                <p>link here a href</p>
            </div>
            <div className="post-card">
                <img className="post-placeholder-img" src="https://i.imgur.com/TL68x25.jpg"/>
                <p className="post-card-title">title: i eat children</p>
                <p>short-description: yum yum</p>
                <p>link here a href</p>
            </div>
        </div>
        <div className="user-liked-posts-col-right">
            <h4>Joe Mama's Likes</h4>
            <div className="post-card">
                <img className="post-placeholder-img" src="https://i.imgur.com/TL68x25.jpg"/>
                <p className="post-card-title">title: i am hungry</p>
                <p>short-description: starving no yums</p>
                <p>link here a href</p>
            </div>
            <div className="post-card">
                <img className="post-placeholder-img" src="https://i.imgur.com/TL68x25.jpg"/>
                <p className="post-card-title">title: kimye house</p>
                <p>short-description: before the divorce</p>
                <p>link here a href</p>
            </div>
        </div>
        </div>
    )
}

export default Profile;