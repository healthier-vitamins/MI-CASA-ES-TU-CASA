import { useState } from "react";
import CreatePostForm from "../components/showPost/CreatePostForm";
import cStyle from "./CreatePost.module.css"

function CreatePost() {
  const [entry, setEntry] = useState({
    title: "",
    img: [],
    short_description: "",
    description: "",
    style: "",
    cost: 0,
    company_name: "",
    username: "",
  });

  return (
    <div className={cStyle.container}>
      <h2>Add your design</h2>
      <CreatePostForm entry={entry} setEntry={setEntry} />
    </div>
  );
}

export default CreatePost;
