import { useState } from "react";
import CreatePostForm from "../components/showPost/CreatePostForm";

function CreatePost() {
  const [entry, setEntry] = useState({
    img: [""],
    title: "",
    description: "",
    style: "",
    cost: "",
    username: "",
  });

  return (
    <div className="createpost-container">
      <h2>Add your design</h2>
      <CreatePostForm entry={entry} setEntry={setEntry} />
    </div>
  );
}

export default CreatePost;
