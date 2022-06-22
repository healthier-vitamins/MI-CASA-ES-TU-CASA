import show from "./ShowPost.module.css";
import { useState, useEffect } from "react";
import ImageModal from "../components/showPost/ImageModal";
import { useParams } from "react-router-dom";
import DeleteModal from "../components/showPost/DeleteModal";
import { userAtom } from "../App.jsx";
import { useAtom } from "jotai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CreateCommentForm from "../components/createComment/CreateCommentForm";

function ShowPost() {
  const [user, setUser] = useAtom(userAtom);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [imgId, setImgId] = useState("");
  const [thisPost, setThisPost] = useState({});
  const [comments, setComments] = useState({})

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setThisPost(data.data);
      });
    }, []);
    
    useEffect(() => {
      fetch(`/api/comments/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("heyyouthere",data)
        setComments(data?.data);
      });
    }, []);
    
  const toggleModalDelete = () => {
    setDeleteModal((prev) => !prev);
  };

  const handleEdit = () => {
    console.log("haven't created this function :(");
  };

  const ShowDeletePost = () => { 
    if (Object.keys(user).length > 0) {
    if (user.data.username === thisPost.username ) {
      return (
        <p className={show.editdelete} onClick={toggleModalDelete}>
          delete this post
        </p>
      );
    } else {
      return null;
    }
  }};

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
          <DeleteModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            thisPost={thisPost}
          />
        </div>
        <div className={show.titlebar}>
          <a
            className={show.username}
            href={`/profile/${thisPost.username}/${id}`}
          >
            {thisPost.username}
          </a>
        </div>
        <div className={show.imageswrapper}>
          <Splide
            options={{
              perPage: 3,
              gap: "1rem",
              arrows: false,
              rewind: true,
            }}
          >
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
            <p className={show.companyname}>
              {" "}
              Designer: {thisPost.company_name}{" "}
            </p>
          </div>
          <div className={show.dright}>
            <p>{thisPost.description}</p>
          </div>
        </div>
        <div className={show.commentsandlikes}>
          <div className={show.comments}>
            <div className={show.commleft}>
              <CreateCommentForm thisPost={thisPost} />
                  comments:
                  {comments.map((c, index) => (
                  <p key={index}>{c.comment} </p>
                    ))}
                  <p>see all ### comments</p>
            </div>
          </div>
          <div className={show.commright}>
            <p>### people liked this post</p>
            <p>like this post (icon) </p>
            <p className={show.editdelete} onClick={handleEdit}>
              edit this post
            </p>
            <ShowDeletePost />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPost;
