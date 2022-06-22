import React from "react";

function ShowComments({ comments }) {
  return (
    <>
      {comments.length > 0
        ? comments.map((c, index) => {
            return (
              <div className="comment-box" key={index}>
                <h5>Username: {c.author_username}</h5>
                <p>Comment: {c.comment} </p>
              </div>
            );
          })
        : "No Comments"}
      <p>See all {comments.length} comments</p>
    </>
  );
}

export default ShowComments;
