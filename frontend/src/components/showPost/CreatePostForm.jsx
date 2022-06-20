import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";

function CreatePostForm({ entry, setEntry }) {
  const imgRef = useRef(null);

  // const [imgs, setImgs] = useState([])
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({
      ...entry,
      [name]: value,
    });
  };

  // const newArr = [];
  const handleImgClick = () => {
    const newArr = entry.img;
    newArr.push(imgRef.current.value);
    setEntry({
      ...entry,
      img: newArr,
    });
    console.log(entry);
  };

  const handleSubmit = () => {
    // console.log(entry);
    // console.log(user);

    // if (entry.username.length < 1 || entry.company_name.length < 1) {
    setEntry({
      ...entry,
      ["company_name"]: user?.data.company_name,
      ["username"]: user?.data._id,
    });

    fetch("/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    })
      .then((response) => response.json())
      .then((data) => console.log(data.data));
    // const id = data.data._id;
    // console.log("post submitted!", entry);
    //! if ({status: "success"}) {
    // navigate(`/show-post/${id}`);
    //! } else {
    //!   return null;
    //! }
  };

  return (
    <div>
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
          ref={imgRef}
          type="text"
          name="img"
          id="img"
          placeholder="Upload image"
        ></input>
        <button onClick={handleImgClick}>Submit images</button>
        <br />
        <button type="submit" onClick={handleSubmit}>
          post your design!
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
