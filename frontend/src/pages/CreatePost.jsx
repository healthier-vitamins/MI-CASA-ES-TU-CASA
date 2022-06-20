import { useState } from "react";
import CreatePostForm from "../components/showPost/CreatePostForm";

function CreatePost() {
  const [entry, setEntry] = useState({
    img: [""],
    short_description: "",
    description: "",
    style: "",
    cost: "",
  });

  return (
    <div className="createpost-container">
      <h2>Add your design</h2>
      <CreatePostForm entry={entry} setEntry={setEntry} />
    </div>
  );
}

export default CreatePost;
