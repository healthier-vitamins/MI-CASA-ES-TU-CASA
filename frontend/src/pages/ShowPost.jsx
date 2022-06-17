import "./showpost.css"

function ShowPost() {
    return (
        <div className="post-container">
        <a href="/profile/:id">caitlikesdogs</a>'s post
        <div className="post-images">
            <img src="https://i.imgur.com/woBZD95.jpeg" width={"280px"} alt="" />
            <img src="https://i.imgur.com/woBZD95.jpeg" width={"280px"} alt="" />
            <img src="https://i.imgur.com/woBZD95.jpeg" width={"280px"} alt="" />
        </div>
        <div className="post-discription">
        <div className="disc-left">
                <p> style style style</p>
                <p> total cost: </p>
            </div>
            <div className="disc-right">
                <p> discription discription discription discription discription discription 
                discription discription discription discription discription </p>
            </div>

        </div>
        <div className="post-commentsandlikes">
            <div className="show-comments">
                <div className="comm-left">
                comments:
                <p> this is beautiful! </p>
                <p>see all ### comments</p> 
                <form>
                <textarea 
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="add your comment"
                    // value={}
                    // onChange={}
                    />
                 <button> add </button>
                 </form>
                 </div>                  
            </div>
            <div className="comm-right"> 
                <p>### people liked this post</p> 
            </div>
        </div>

        </div>
    )
}

export default ShowPost;