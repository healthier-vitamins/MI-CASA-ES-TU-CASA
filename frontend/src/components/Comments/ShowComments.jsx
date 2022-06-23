import React from "react";
import { set } from "mongoose";
import { useState } from "react";
import show from "../../pages/ShowPost.module.css";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";

const EditForm = ({ comment, editId, setComments, comments, setEditId }) => {
  const [commentInput, setCommentInput] = useState("");

  const replaceComment = (comment) => {
    const num = comments.findIndex((c) => c._id === comments._id);
    setComments([
      ...comments.slice(0, num),
      comment,
    ]);
  };

  const handleEdit = () => {
    fetch(`/api/comments/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...comment, comment: commentInput }),
    })
      .then((response) => response.json())
      .then((data) => {
        replaceComment(data.data);
        setEditId("");
        console.log("comments:", comments);
      });
  };


  return (
    <>
      <textarea onChange={(e) => setCommentInput(e.target.value)}>
        {comment.comment}
      </textarea>
      <button onClick={handleEdit}>post</button>
    </>
  );
};

const ShowEditDeleteButtons = ({comment, setEditId, editId, comments, setComments}) => {
  const [user, setUser] = useAtom(userAtom);

  const handleDelete = (id) => {
    fetch(`/api/comments/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "comment deleted") {
          setComments(comments.filter((c) => c._id !== id));
        } else {
          return null;
        }
      });
  };
  
  const handleClick = (id) => {
    setEditId(id);
  };

  if (user.data) {
    console.log("same thing yo", comment)
    if (user.data.username === comment?.author_username) {
      return (
        <>
          <p
            className={show.deletebutton}
            onClick={() => {
              handleClick(comment._id);
            }}
          >
            edit
          </p>
          <p
            className={show.deletebutton}
            onClick={() => {
              handleDelete(comment._id);
            }}
          >
            delete
          </p>
        </>
      );
    } else {
      return null;
    }
  }
};


function ShowComments({ comments, setComments }) {
  const [editId, setEditId] = useState("");

  return (
    <>
      {comments.length > 0
        ? comments.map((comment, index) => {
            return (
              <div className={show.usercomment} key={index}>
                {editId === comment._id ? (
                  <EditForm
                    comment={comment}
                    editId={editId}
                    setComments={setComments}
                    comments={comments}
                    setEditId={setEditId}
                  />
                ) : (
                  <p>Comment: {comment.comment} </p>
                )}
                <p>Username: {comment.author_username}</p>
                <ShowEditDeleteButtons 
                comment={comment} editId={editId} 
                setEditId={setEditId} 
                comments={comments}
                setComments={setComments}
                />
              </div>
            );
          })
        : "No Comments"}
      <p>See all {comments.length} comments</p>
    </>
  );
}

export default ShowComments;
