function EditPost({
  show,
  id,
  setEditMode,
  editMode,
  thisPost,
  setThisPost,
  setRevertChanges,
  revertChanges,
}) {
  //! update
  // needs to be in a button
  //   const test = {
  //     title: "changedtitle",
  //     img: ["somethingthatishere"],
  //     description: "this is something changed",
  //     style: "modern changed",
  //     style_lower: "modern changed",
  //     cost: 5000,
  //     company_name: "changedcompany",
  //     company_name_lower: "changedcompany",
  //     username: "changingchange",
  //     username_lower: "changingchange",
  //     userId: "62b3e664148a153a4079109a",
  //   };
  //!

  const handleEdit = () => {
    setRevertChanges(thisPost);

    const emptyArr = [];
    setEditMode(true);
    setThisPost({ ...thisPost, ["img"]: emptyArr });
    console.log("img thispost arr:", thisPost.img);
  };

  const handleCancel = () => {
    setThisPost(revertChanges);

    fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // need to change state of thisPost
      },
      body: JSON.stringify(thisPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("cancelled data::::::", data);
      });
      setEditMode(false)
  };

  const handleConfirmEdit = () => {
    setThisPost({ ...thisPost });

    
    console.log("this POST", thisPost);

    fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // need to change state of thisPost
      },
      body: JSON.stringify(thisPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data::::::", data);
      });
      setEditMode(false);
  };

  return (
    <>
      {editMode ? (
        <>
          <p className={show.editdelete} onClick={handleConfirmEdit}>
            Enter changes?
          </p>
          <p className={show.editdelete} onClick={handleCancel}>
            Cancel
          </p>
        </>
      ) : (
        <p className={show.editdelete} onClick={handleEdit}>
          Edit this post
        </p>
      )}
    </>
  );
}
export default EditPost;
