import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

function UserPosts() {
    
    // const { id } = useParams();
    // const [ userPosts, setUserPosts] = useState({});

    // useEffect(() => {
    //     fetch(`/api/posts/prof/${id}`)
    //     .then((response) => response.json())
    //     .then((data) => {setUserPosts(data)
    //         console.log(data)
    //     });
    // }, []);

    return (
        <div className="user-posts-col-left">
        <h4>User's Posts</h4>
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
    )
}

export default UserPosts;