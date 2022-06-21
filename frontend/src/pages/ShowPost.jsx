import show from "./ShowPost.module.css";
import { useState, useEffect } from "react";
import ImageModal from "../components/showPost/ImageModal";
import { useParams } from "react-router-dom";
import DeleteModal from "../components/showPost/DeleteModal";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function ShowPost() {
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [imgId, setImgId] = useState("");
  const [thisPost, setThisPost] = useState({});

  const toggleModal = () => {
    setShowModal((prev) => !prev);
    // console.log("showModal", showModal);
  };

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setThisPost(data?.data);
      });
  }, []);

  const toggleModalDelete = () => {
    setDeleteModal(prev => !prev);
  };

  const handleEdit = () => {
    console.log("haven't created this function :(");
  };

  // console.log("k",thisPost)

  if (Object.keys(thisPost).length < 1) {
    return "loading";
  } else {
    return (
      <div className={show.container}>
        <div>
          <ImageModal
            showModal={showModal}
            setShowModal={setShowModal}
            imgId={imgId}
          />
          <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
        </div>
        <div className={show.titlebar}>
          <a className={show.username} href="/profile/:id">
            {thisPost.username}
          </a>
          <p className={show.companyname}> {thisPost.company_name} </p>
        </div>
        <div className={show.imageswrapper}>
          <Splide options={{
            perPage: 3,
            gap: "1rem",
            arrows: false,
            rewind: true,
          }}>
              {thisPost?.img.map((i, index) => (
            <SplideSlide key={index}>
                <img
                  key={index}
                  src={i}
                  width={"280px"}
                  height={"220px"}
                  alt=""
                  onClick={(handleclick) => {
                    setImgId(i);
                    toggleModal();
                  }}
                  />
                  </SplideSlide>
              ))}
          </Splide>
          <div className={show.images}></div>
        </div>
        <div className={show.discription}>
          <div className={show.dleft}>
            {/* <p>{thisPost.style}</p> */}
            <p> total cost: {thisPost.cost}</p>
          </div>
          <div className={show.dright}>
            <p>{thisPost.description}</p>
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
            <p>like this post</p>
            <p className={show.editdelete} onClick={handleEdit}>
              edit this post
            </p>
            <p className={show.editdelete} onClick={toggleModalDelete}>
              delete this post
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPost;
