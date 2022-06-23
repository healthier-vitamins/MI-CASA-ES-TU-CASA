import { set } from "mongoose";
import React from "react";
import show from "../../pages/ShowPost.module.css";

function ShowComments({ comments, setComments }) {

  const handleDelete = (id) => {
     console.log("疲れたわ", id)
      fetch(`/api/comments/${id}`, { method: "DELETE"})
      .then((response) => response.json())
      .then((data) => {
         if (data.status === "comment deleted") {
          setComments((comments.filter((c) => c._id !== id)))
          console.log("早く終わりたい")
      } else {
          return null;
      }
      });
  }

  return (
    <>
      {comments.length > 0
        ? comments.map((c, index) => {
            return (
              <div className={show.usercomment} key={index}>
                <p>Comment: {c.comment} </p>
                <p>Username: {c.author_username}</p>
                <p>edit</p><p className={show.deletebutton} onClick={() => {handleDelete(c._id)}}>delete</p>
              </div>
            );
          })
        : "No Comments"}
      <p>See all {comments.length} comments</p>
    </>
  );
}

export default ShowComments;
