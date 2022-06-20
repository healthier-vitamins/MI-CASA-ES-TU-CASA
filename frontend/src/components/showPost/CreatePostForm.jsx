import React from "react";
import { useNavigate } from "react-router-dom";

function CreatePostForm({ entry, setEntry }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({
      ...entry,
      [name]: value,
    });
  };

  // const handleChangeName = (e) => {
  //   setLastImg(e.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log("post submitted!", entry);
    if ({ status: "success" }) {
      navigate("/show-post/:id");
    } else {
      return null;
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          value={entry.title}
          type="text"
          name="title"
          id="title"
          placeholder="title"
        ></input>
        <br />
        <label htmlFor="img">Upload image</label>
        <input
          onChange={handleChange}
          value={entry.img}
          type="text"
          name="img"
          id="img"
          placeholder="upload image"
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
        <label htmlFor="short-description">Description</label>
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
          name="cost"
          id="cost"
          placeholder="Cost"
        ></input>
        <br />
        <button type="submit" onClick={handleSubmit}>
          post your design!
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
