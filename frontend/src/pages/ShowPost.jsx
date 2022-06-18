import "./showpost.css"
import { useState } from "react"
import ImageModal from "../components/showPost/ImageModal"

function ShowPost() {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(prev => !prev);
        console.log("showModal", showModal)
    }
    
    return (
        <div className="post-container">
            <div>
                <ImageModal showModal={showModal} setShowModal={setShowModal} />
            </div>
        <a href="/profile/:id">caitlikesdogs</a>'s post
        <div className="post-images">
            <img src="https://i.imgur.com/woBZD95.jpeg" 
            width={"280px"} 
            alt="" 
             onClick={toggleModal}
            />
            <img src="https://i.imgur.com/woBZD95.jpeg" width={"280px"} alt="" onClick={toggleModal} />
            <img src="https://i.imgur.com/woBZD95.jpeg" width={"280px"} alt="" onClick={toggleModal} />
            {/* <span class="close-button">close</span> */}
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

