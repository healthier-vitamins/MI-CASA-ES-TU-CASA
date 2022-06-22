import { useState } from "react";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";

function CreateCommentForm( { thisPost }) {
  const [user, setUser] = useAtom(userAtom);
    const [comment, setComment] = useState({
        comment: "",
        author:"",
        postId: ""
    })
     

    const handleChange = (event) => {
        const { value } = event.target;
        // console.log(user, thisPost)
        setComment({
            ...comment,
            ["comment"]: value,
            ["author"]: user.data._id,
            ["postId"]: thisPost._id
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(comment)
        fetch("/api/comments/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        })
          .then((response) => response.json())
          .then((data) => console.log("comment", data));
        // if (data.status === "comment success") {
    
        // } else {
        //   console.log(allData?.error);
        //   setTimeout(() => {
        //     return "Failed to create post";
        //   }, 500);
        // }
    }

  return (
    <div>
      <form>
        <textarea
          type="text"
          id="comment"
          name="comment"
          placeholder="add your comment"
          // value={}
          onChange={handleChange}
        />
        <button
        type="submit"
        onClick={handleSubmit}
        > add </button>
      </form>
    </div>
  );
}

export default CreateCommentForm;
