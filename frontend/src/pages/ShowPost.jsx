import "./showpost.css";
import { useState } from "react";
import ImageModal from "../components/showPost/ImageModal";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function ShowPost() {
  const [showModal, setShowModal] = useState(false);
  const [imgId, setImgId] = useState("");

  const toggleModal = () => {
    setShowModal((prev) => !prev);
    console.log("showModal", showModal);
  };

  const imgs = [
      "https://i.imgur.com/woBZD95.jpeg",
      "https://i.imgur.com/k8BaoR8.jpeg",
      "https://i.imgur.com/woBZD95.jpeg",
      "https://i.imgur.com/woBZD95.jpeg",
      "https://i.imgur.com/k8BaoR8.jpeg"
  ]

  return (
    <div className="post-container">
      <div>
        <ImageModal 
        showModal={showModal} 
        setShowModal={setShowModal}
        imgId={imgId}
         />
      </div>
      <div className="titlebar">
      <p className="title"> title </p>
      <a className="username" href="/profile/:id">caitlikesdogs</a>
      </div>
      <div className="post-images-wrapper"> 
      {/* <Splide 
          options={{
            perPage: 4,
            arrows: false,
            rewind : true,
            drag: "free",
            gap: "1rem",
        }}
      > */}
            <div className="post-images">
            {imgs.map((i, index) => (
            // <SplideSlide key={index}>
                <img key={index}
                src={i}
                width={"280px"}
                alt=""
                onClick={handleclick => {setImgId(i)
                  toggleModal()}}
            />
          // </SplideSlide>
                ))}
                </div>
         {/* </Splide> */}
         </div>
      <div className="post-discription">
        <div className="disc-left">
          <p> style style style</p>
          <p> total cost: </p>
        </div>
        <div className="disc-right">
          <p>
            {" "}
            discription discription discription discription discription
            discription discription discription discription discription
            discription{" "}
          </p>
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
  );
}

export default ShowPost;
