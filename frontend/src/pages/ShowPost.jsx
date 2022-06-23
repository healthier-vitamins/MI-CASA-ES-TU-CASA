import show from "./ShowPost.module.css";
import { useState, useEffect } from "react";
import ImageModal from "../components/showPost/ImageModal";
import { useNavigate, useParams } from "react-router-dom";
import DeleteModal from "../components/showPost/DeleteModal";
import { userAtom } from "../App.jsx";
import { useAtom } from "jotai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CreateCommentForm from "../components/Comments/CreateCommentForm";
import ShowComments from "../components/Comments/ShowComments";

function ShowPost() {
  const [user, setUser] = useAtom(userAtom);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [imgId, setImgId] = useState("");
  const [thisPost, setThisPost] = useState({});
  const [comments, setComments] = useState({});

  const navigate = useNavigate();
  // const [allComments, setAllComments] = useState({});

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
        // console.log("heyyouthere", data);
        setComments(data.data);
        console.log("comments queried", data.data);
      });
  }, []);

  const toggleModalDelete = () => {
    setDeleteModal((prev) => !prev);
  };

  const handleEdit = () => {
    console.log("haven't created this function :(");
  };

  const ShowDeletePost = () => {
    console.log(
      "do they match? authentication for delete button",
      user,
      thisPost
    );
    if (user.data) {
      if (user.data.username === thisPost.username) {
        console.log("delete button shall show");
        return (
          <p className={show.editdelete} onClick={toggleModalDelete}>
            delete this post
          </p>
        );
      } else {
        return null;
      }
    }
  };

  const HideAddCommentField = () => {
    if (!user.data) {
      console.log("comment fioeld hidden")
      return (
        <>
          <p>Login to comment!</p>
          <button onClick={()=>navigate("/login")}>Login</button>
        </>
      );
    } else {
      return <CreateCommentForm
        thisPost={thisPost}
        comments={comments}
        setComments={setComments}
      />;
    }
  };

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
              perPage: 2,
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
                  width={"250px"}
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
              {/* only show when user is logged in */}
              {/* if (user) */}
              <HideAddCommentField />
              <ShowComments comments={comments} />
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
