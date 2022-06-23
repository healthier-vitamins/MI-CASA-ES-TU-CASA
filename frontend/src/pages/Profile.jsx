import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserPosts from "../components/Profile/UserPosts";
import UserLikes from "../components/Profile/UserLikes";
import "./Profile.css"

function Profile() {
    // set use profile data
    const { id } = useParams();
    const [ userProfile, setUserProfile ] = useState({});

    // update
    // const [num, setNum] = useState(-1);

    useEffect(() => {
        fetch(`/api/users/${id}`)
        .then((response) => response.json())
        .then((data) => {setUserProfile(data)
            console.log(data)
        });
    }, []);

    //! in progress
    const handleEdit = () => {
        console.log("click")
    };
    
    return (
        <div className="user-profile"> 
       
        <button onClick={handleEdit}>Edit</button>
        
        {/* user profile details */}
        <div className="user-profile-header">

            <img className="profile-pic" src={userProfile.profileImg}/>

            <h2 className="profile-name">{userProfile.firstName} {userProfile.lastName}</h2>

            <h3 className="profile-user">(@{userProfile.username})</h3>
            
            {/* <img id="insta" src="https://i.imgur.com/36GYym5.png"/>
                <i class="bi bi-instagram"></i> */}

            <div className="user-posts-likes">
                <p>Number of posts: {userProfile.postCount}</p>
                <p>Total likes: {userProfile.likeCount}</p>
            </div>

        </div>

        {/* user's posts */}
        <UserPosts />
        {/* user's likes */}
        <UserLikes />
        </div>
    )
}

export default Profile;