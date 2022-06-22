import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userAtom } from "../../App.jsx";
import { useAtom } from "jotai";
import CSSModules from "react-css-modules";
import cStyle from "../../pages/CreatePost.module.css";


function CreatePostForm({ entry, setEntry }) {
  // const imgRef = useRef(null);

  const [img, setImg] = useState("");
  const [allData, setAllData] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const [buttonState, setButtonState] = useState({
    post_button: true,
    img_button: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({
      ...entry,
      [name]: value,
    });
  };

  const handleImgClick = () => {
    const newArr = entry.img;
    newArr.push(img);
    setImg("");

    //! debug
    const usernameLower = entry?.username.toLowerCase();
    const companyNameLower = entry?.company_name.toLowerCase();
    const styleLower = entry?.style.toLowerCase();

    setEntry({
      ...entry,
      img: newArr,
      ["company_name"]: user?.data?.company_name,
      ["username"]: user?.data?.username,
      ["username_lower"]: usernameLower,
      ["company_name_lower"]: companyNameLower,
      ["style_lower"]: styleLower,
    });
    console.log(entry.img);
    if (entry.img.length > 0) {
      setButtonState({
        ...buttonState,
        post_button: false,
        img_button: true,
      });
    }
  };

  // const handleChangeAndPaste = (e) => {
  //   if (e.clipboardData.getData("text")) {
  //     console.log("pasted data");
  //     setButtonState({
  //       ...buttonState,
  //       img_button: false,
  //     });

  // const inputTest = document.getElementById("#img")

  // setTimeout(() => {
  //   if (inputTest.matches(':-internal-autofill-selected')) {
  //     setButtonState({
  //       ...buttonState,
  //       img_button: false
  //     })
  //     console.log("shifted button state")
  //   }
  // }, 500)

  const handleImgChange = (e) => {
    setImg(e.target.value);
    console.log(img.length);
    if (e.target.value.length > 10) {
      setButtonState({
        ...buttonState,
        img_button: false,
      });
    } else {
      setButtonState({
        ...buttonState,
        img_button: true,
      });
    }
  };

  const handleSubmit = () => {
    // assignLowerValues();
    console.log("entry during submit", entry);
    fetch("/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    })
      .then((response) => response.json())
      .then((data) => console.log("data", data));

    setEntry({
      ...entry,
      title: "",
      img: [],
      short_description: "",
      description: "",
      style: "",
      style_lower: "",
      cost: 0,
      company_name: "",
      company_name_lower: "",
      username: "",
      username_lower: "",
    });
    setButtonState({
      ...buttonState,
      post_button: true,
      img_button: true,
    });

    // const id = data.data._id;
    console.log(allData);
    if (allData?.status === "created successfully") {
      navigate(`/show-post/${allData.data._id}`);
    } else {
      console.log(allData?.error);
      setTimeout(() => {
        return "Failed to create post";
      }, 500);
      navigate(`/create-post`);
    }
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
          // onPaste={handleChangeAndPaste}
          onChange={handleImgChange}
        ></input>
        <button disabled={buttonState.img_button} onClick={handleImgClick}>
          Submit images
        </button>

        <br />
        {/* {buttonState ? "you can upload ** more images" : "nn"} */}
        <button
          type="submit"
          disabled={buttonState.post_button}
          onClick={handleSubmit}
        >
          post your design!
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
