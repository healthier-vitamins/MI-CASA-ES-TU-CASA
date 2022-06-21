import show from "./ShowPost.module.css"
import { useState, useEffect } from "react"
import ImageModal from "../components/showPost/ImageModal"
import { useParams } from "react-router-dom";
// import { Splide, SplideSlide } from '@splidejs/react-splide';


function ShowPost() {
  const [showModal, setShowModal] = useState(false);
  const [imgId, setImgId] = useState("");
  const [thisPost, setThisPost] = useState({});

  const toggleModal = () => {
    setShowModal((prev) => !prev);
    console.log("showModal", showModal);
  };

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
      });
  }, []);

  console.log("k",thisPost)

  const imgs = [
      "https://i.imgur.com/woBZD95.jpeg",
      "https://i.imgur.com/k8BaoR8.jpeg",
      "https://i.imgur.com/woBZD95.jpeg",
      "https://i.imgur.com/woBZD95.jpeg",
      "https://i.imgur.com/k8BaoR8.jpeg"
  ]

  return (
    <div className={show.container}>
      <div>
        <ImageModal 
        showModal={showModal} 
        setShowModal={setShowModal}
        imgId={imgId}
         />
      </div>
      <div className={show.titlebar}>
      {/* <p className="title"> title </p> */}
      <a className={show.username} href="/profile/:id">{thisPost.username}</a>
      </div>
      <div className={show.imageswrapper}> 
      {/* <Splide 
          options={{  
            perPage: 5,
            arrows: true,
            rewind : false,
            drag: "free",
            gap: "10rem",
        }}
      > */}
            <div className={show.images}>
            {imgs.map((i, index) => (
            // <SplideSlide key={index}>
                <img key={index}
                src={i}
                width={"280px"}
                alt=""
                onClick={handleclick => {setImgId(i)
                  toggleModal()}}
            />
            ))}
          {/* </SplideSlide> */}
                </div>
         {/* </Splide> */}
         </div>
      <div className={show.discription}>
        <div className={show.dleft}>
          <p>{thisPost.style}</p>
          <p> total cost: {thisPost.const}</p>
        </div>
        <div className={show.dright}>
          <p>
          {thisPost.description}
          </p>
        </div>
      </div>
      <div className={show.commentsandlikes}>
        <div className={show.comments}>
          <div className={show.commleft}>
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
        <div className={show.commright}>
          <p>### people liked this post</p>
            </div>
        </div>
    </div>
  );
}

export default ShowPost;
