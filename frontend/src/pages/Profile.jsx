
function Profile() {
    return (
        <div className="user-profile"> 
        <div className="user-profile-header">
            <img className="profile-pic" src="https://i.imgur.com/fSBfFDP.jpg"/>
            <h2 className="username-h2">joe mama</h2>
            <div className="user-posts-likes">
                <p>number of posts: 21</p>
                <p>total likes: 220</p>
            </div>
        </div>
        <div className="user-posts-col-left">
            <div className="post-card">
                <p>img-here.png</p>
                <p>title: i love my wife</p>
                <p>short-description: this style is suitable for those who like chaos and disorder</p>
                <p>link here a href</p>
            </div>
            <div className="post-card">
                <p>img-here.png</p>
                <p>title: i eat children</p>
                <p>short-description: yum yum</p>
                <p>link here a href</p>
            </div>
        </div>
        <div className="user-liked-posts-col-right">
            <div className="post-card">
                <p>img-here.png</p>
                <p>title: i am hungry</p>
                <p>short-description: starving no yums</p>
                <p>link here a href</p>
            </div>
            <div className="post-card">
                <p>img-here.png</p>
                <p>title: kimye house</p>
                <p>short-description: before the divorce</p>
                <p>link here a href</p>
            </div>
        </div>
        </div>
    )
}

export default Profile;