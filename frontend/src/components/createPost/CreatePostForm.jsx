import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";
import CSSModules from "react-css-modules";
import cStyle from "../../pages/CreatePost.module.css";
import { set } from "mongoose";


function CreatePostForm({ entry, setEntry }) {

  const imgRef = useRef(null);

  const [img, setImg] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const [buttonState, setButtonState] = useState({
    post_button: true,
    img_button: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({
      ...entry,
      [name]: value,
    });
  };

  const handleImgClick = (e) => {
    const newArr = entry.img;
    newArr.push(img);
    setImg("");

    setEntry({
      ...entry,
      img: newArr,
      ["company_name"]: user?.data?.company_name,
      ["username"]: user?.data?.username,
    });
    console.log(entry.img);
    if (entry.img.length > 0) {
      setButtonState({
        ...buttonState,
        post_button: false
      });
    }
  };

  const handleSubmit = () => {
    fetch("/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    })
      .then((response) => response.json())
      .then((data) => console.log(data.data));
    console.log("button state: ", buttonState);
    // const id = data.data._id;
    // console.log("post submitted!", entry);
    //! if ({status: "success"}) {
    // navigate(`/show-post/${id}`);
    //! } else {
    //!   return null;
    //! }
  };

  return (
    <div className={cStyle.container}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          value={entry.title}
          name="title"
          type="text"
          id="title"
          placeholder="Title"
        ></input>
        <br />
        <label htmlFor="description">Description</label>
        <textarea
          onChange={handleChange}
          value={entry.description}
          name="description"
          id="description"
          placeholder="description; 500 characters"
        ></textarea>
        <br />
        <label htmlFor="short-description">Short Description</label>
        <textarea
          onChange={handleChange}
          value={entry.short_description}
          name="short_description"
          id="short_description"
          placeholder="Short description; 120 characters"
        ></textarea>
        <br />
        <label htmlFor="style">Style</label>
        <input
          onChange={handleChange}
          value={entry.style}
          name="style"
          id="style"
          placeholder="style"
        ></input>
        <br />
        <label htmlFor="cost">Total Cost</label>
        <input
          onChange={handleChange}
          value={entry.cost}
          type="number"
          name="cost"
          id="cost"
          placeholder="Cost"
        ></input>
        <br />
        <label htmlFor="img">Upload image</label>
        <input
          // ref={imgRef}
          type="text"
          name="img"
          id="img"
          placeholder="Upload image"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
            console.log(img.length)
            if (img.length > 10) {
              setButtonState({
                ...buttonState,
                img_button: false
              })
            } else {
              setButtonState({
                ...buttonState,
                img_button: true 
              })
            }
          }}
        ></input>
        <button disabled={buttonState.img_button} onClick={handleImgClick}>Submit images</button>
        <br />
        {/* {buttonState ? "you can upload ** more images" : "nn"} */}
        <button type="submit" disabled={buttonState.post_button} onClick={handleSubmit}>
          post your design!
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;