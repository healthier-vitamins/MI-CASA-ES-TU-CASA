import { useState } from "react";
import CreatePostForm from "../components/createPost/CreatePostForm";
import cStyle from "./CreatePost.module.css"

function CreatePost() {
  const [entry, setEntry] = useState({
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

  return (
    <div className={cStyle.container}>
      <h2 className={cStyle.title}>Add your design</h2>
      <CreatePostForm entry={entry} setEntry={setEntry} />
    </div>
  );
}

export default CreatePost;
