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
import EditPost from "../components/showPost/EditPost";
import "bootstrap-icons/font/bootstrap-icons.css";

function ShowPost() {
  const [user, setUser] = useAtom(userAtom);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [imgId, setImgId] = useState("");
  const [thisPost, setThisPost] = useState({});
  const [comments, setComments] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editImg, setEditImg] = useState({
    imgArr: [],
    prevImgArr: [],
  });

  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  //! initialise setThisPost
  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      // this post's database from mongoose
      .then((data) => setThisPost(data.data));
  }, []);

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/comments/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("heyyouthere", data);
        setComments(data.data);
        console.log("comments queried", data);
      });
  }, []);

  //! seems like a duplicate of the above
  // useEffect(() => {
  //   fetch(`/api/users/`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("heyyouthere", data);
  //       setComments(data.data);
  //       console.log("comments queried", data.data);
  //     });
  // }, []);

  const toggleModalDelete = () => {
    setDeleteModal((prev) => !prev);
  };

  const ShowEditDeleteLikeButtons = () => {
    if (user.data) {
      if (user.data.username === thisPost.username) {
        return (
          // edit and delete button to only show when the author is logged in.
          <>
            <EditPost
              show={show}
              id={id}
              editMode={editMode}
              setEditMode={setEditMode}
              thisPost={thisPost}
              setThisPost={setThisPost}
            />
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
    console.log("Mr, please use this when you do edit");
  };

  const EditModeForImgs = () => {
    if (!editMode) {
      return (
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
                onClick={() => {
                  setImgId(i);
                  toggleModal();
                }}
              />
            </SplideSlide>
          ))}
        </Splide>
      );
    } 
    else if (editMode) {
      //! 
      // useEffect(() => {
      //   setEditImg({
      //     ...editImg,
      //     ["prevImgArr"]: thisPost?.img,
      //   });
      //   console.log("previous img arr", editImg.prevImgArr);
      // }, []);
      return (
        <>
          <p>Images:</p>
          <input
            value={editImg}
            onChange={(e) => setEditImg(e.target.value)}
          ></input>
          {/* <button>Add image</button> */}
        </>
      );
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
            href={`/profile/${thisPost.username}/${thisPost.userId}`}
          >
            {thisPost.username}
          </a>
          <div className={show.likesheart}>
            <i className="bi bi-suit-heart-fill" onClick={handleLike}></i>
            <br />
            <p className={show.likesnum}>####</p>
          </div>
        </div>
        <div className={show.imageswrapper}>
          <div className={show.images}></div>
          <EditModeForImgs />
        </div>
        <div className={show.discription}>
          <div className={show.dleft}>
            {/* <p>{thisPost.style}</p> */}
            {/* EDIT MODE */}
            {editMode ? (
              <>
                <p>Cost:</p>
                <input
                  value={thisPost.cost}
                  onChange={(e) =>
                    setThisPost({ ...thisPost, ["cost"]: e.target.value })
                  }
                ></input>
              </>
            ) : (
              <p> total cost: S${thisPost.cost}</p>
            )}
            {/* END OF EDIT MODE */}

            {/* EDIT MODE: Don't change company name since tied to user account */}
            <p className={show.companyname}>
              {" "}
              Designer: {thisPost.company_name}{" "}
            </p>
          </div>

          {/* EDIT MODE */}
          {editMode ? (
            <>
              <p>Title:</p>
              <input
                value={thisPost.title}
                onChange={(e) =>
                  setThisPost({ ...thisPost, ["title"]: e.target.value })
                }
              ></input>
              <p>Description:</p>
              <input
                value={thisPost.description}
                onChange={(e) =>
                  setThisPost({ ...thisPost, ["description"]: e.target.value })
                }
              ></input>
            </>
          ) : (
            <div className={show.dright}>
              <p>{thisPost.title}</p>
              <p>{thisPost.description}</p>
            </div>
          )}
          {/* END OF EDIT MODE */}
        </div>
        <div className={show.commentsandlikes}>
          <div className={show.comments}>
            <div className={show.commleft}>
              {/* only show when user is logged in */}
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
