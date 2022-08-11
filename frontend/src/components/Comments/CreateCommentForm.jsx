import { useState } from "react";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";
import show from "../../pages/ShowPost.module.css";

function CreateCommentForm({ thisPost, comments, setComments }) {
  const [user, setUser] = useAtom(userAtom);
  // const [message, setMessage] = useState(false)
  const [newComment, setNewComment] = useState({
    comment: "",
    author_username: "",
    author_id: "",
    postId: "",
  });

  const handleChange = (event) => {
    // setMessage(false)
    const { value } = event.target;
    setNewComment({
      ...newComment,
      ["comment"]: value,
      ["author_username"]: user.data.username,
      ["author_id"]: user.data._id,
      ["postId"]: thisPost._id,
    });
  };
  //   $('#form').submit(function() {
  //     if ($.trim($("#email").val()) === "" || $.trim($("#user_name").val()) === "") {
  //         alert('you did not fill out one of the fields');
  //         return false;
  //     }
  // });

  const handleSubmit = () => {
    if (newComment.comment) {
      fetch("/api/comments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      })
        .then((response) => response.json())
        .then((data) => {
          setComments([...comments, data.data]);
        });
      console.log("comments:", comments);
      setNewComment({
        comment: "",
        author_username: "",
        author_id: "",
        postId: "",
      });
    } else {
      //   setMessage(true);
      window.alert("Comment cannot be empty")
    }
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
      <h5>Add Comment</h5>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* {newComment.comment ? <></> : <p className={show.message}>**comment cannot be empty</p>} */}

        <textarea
          className={show.commentbox}
          type="text"
          id="create-comment"
          name="create-comment"
          placeholder="add your comment"
          value={newComment.comment}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          {" "}
          post{" "}
        </button>
      </form>
    </div>
  );
}

export default CreateCommentForm;
