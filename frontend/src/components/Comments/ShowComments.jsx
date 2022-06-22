import React from "react";

function ShowComments( { comments }) {
  return (
    <div>
      comments:
      {comments.length > 0
        ? comments.map((c, index) => <p key={index}>{c.comment} </p>)
        : "no comments yet"}
      <p>see all {comments.length} comments</p>
    </div>
  );
}

export default ShowComments;
