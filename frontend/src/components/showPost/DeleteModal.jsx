import React from 'react'
import m from "./DeleteModal.module.css";

function DeleteModal({ deleteModal, setDeleteModal }) {

    const toggleModal = () => {
        setDeleteModal(false)
    }

    const handleDelete = () => {
        console.log("you're gonna be deleted :(");
    }


  return (
      <>
      {deleteModal ? (
        <div className={m.container}>
            <div className={m.card}>
        <p>are you sure you'd like to delete this post?</p>
        <button onClick={handleDelete}>yes</button>
        <button onClick={toggleModal}>no</button>
        </div>
        </div>
        ) : null }
        </>
        )
}

export default DeleteModal
