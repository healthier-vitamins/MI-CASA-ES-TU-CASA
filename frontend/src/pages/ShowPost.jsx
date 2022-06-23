import show from "./ShowPost.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userAtom } from "../App.jsx";
import { useAtom } from "jotai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ImageModal from "../components/showPost/ImageModal";
import DeleteModal from "../components/showPost/DeleteModal";
import CreateCommentForm from "../components/Comments/CreateCommentForm";
import ShowComments from "../components/Comments/ShowComments";
import 'bootstrap-icons/font/bootstrap-icons.css';


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
        console.log("comments queried", data);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/users/`)
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

  const ShowEditDeleteLikeButtons = () => {
    console.log(
      "do they match? authentication for delete button",
      user,
      thisPost
    );
    if (user.data) {
      if (user.data.username === thisPost.username) {
        console.log("delete button shall show");
        return (
          // edit and delete button to only show when the author is logged in.
          <>
            <p className={show.editdelete} onClick={handleEdit}>
              edit this post
            </p>
            <p className={show.editdelete} onClick={toggleModalDelete}>
              delete this post
            </p>
            
          </>
        );
      } else {
        return null;
      }
    }
  };

  const HideAddCommentField = () => {
    if (!user.data) {
      console.log("comment fioeld hidden");
      return (
        <>
          <p>Login to comment!</p>
          <button onClick={() => navigate("/login")}>Login</button>
        </>
      );
    } else {
      return (
        <CreateCommentForm
          thisPost={thisPost}
          comments={comments}
          setComments={setComments}
        />
      );
    }
  };

  const handleLike = () => {
    console.log("Mr, please use this when you do edit")
  }

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
            href={`/profile/${thisPost.username}/${thisPost.userId}`}
            > 
            {thisPost.username}
            </a>
            <div className={show.likesheart}>
            <i className="bi bi-suit-heart-fill"
            onClick={handleLike}></i><br/>            
            <p className={show.likesnum}>####</p>
            </div>
        </div>
        <div className={show.imageswrapper}>
          <Splide
            options={{
              perPage: 4,
              // gap: "0.5rem",
              overflow: "hidden",
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
            <p> total cost: S${thisPost.cost}</p>
            <p className={show.companyname}>
              {" "}
              Designer: {thisPost.company_name}{" "}
            </p>
          </div>
          <div className={show.dright}>
            <p>{thisPost.title}</p>
            <p>{thisPost.description}</p>
          </div>
        </div>
        <div className={show.commentsandlikes}>
          <div className={show.comments}>
            <div className={show.commleft}>
              {/* only show when user is logged in */}
              {/* if (user) */}
              <HideAddCommentField />
              <ShowComments comments={comments} setComments={setComments} />
            </div>
          </div>  
          <div className={show.commright}>
            <ShowEditDeleteLikeButtons />

          </div>
        </div>
      </div>
    );
  }
}

export default ShowPost;
