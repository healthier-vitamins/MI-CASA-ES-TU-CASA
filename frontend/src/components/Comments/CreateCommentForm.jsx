import { useState } from "react";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";
import show from "../../pages/ShowPost.module.css";

function CreateCommentForm({ thisPost, comments, setComments }) {
  const [user, setUser] = useAtom(userAtom);
  const [newComment, setNewComment] = useState({
    comment: "",
    author_username: "",
    author_id: "",
    postId: "",
  });

  const handleChange = (event) => {
    const { value } = event.target;
    // console.log(user, thisPost)
    setNewComment({
      ...newComment,
      ["comment"]: value,
      ["author_username"]: user.data.username,
      ["author_id"]: user.data._id,
      ["postId"]: thisPost._id,
    });
  };

  const handleSubmit = () => {
    fetch("/api/comments/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("comments:", data.data)
        setComments([...comments, data.data])
      });
    //  console.log("comments:", comments)
    setNewComment({
      comment: "",
      author_username: "",
      author_id: "",
      postId: "",
    });
  };

  //! setComments([ ...comments, data.data ])

  // if (data.status === "comment success") {
  //   console.log(allComments)
  // } else {
  //   setTimeout(() => {
  //     return "Failed to add comment";
  //   }, 500);
  // }

  return (
    <div className={show.commentcontainer}>
      <h5>Create Comment</h5>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea className={show.commentbox}
          type="text"
          id="create-comment"
          name="create-comment"
          placeholder="add your comment"
          // value={}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          {" "}
          add{" "}
        </button>
      </form>
    </div>
  );
}

export default CreateCommentForm;
