import { set } from 'mongoose';
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import m from "./DeleteModal.module.css";

function DeleteModal({ deleteModal, setDeleteModal, thisPost }) {
    const [posts, setPosts] = useState({})
    const navigate = useNavigate();
     

  useEffect(() => {
    fetch("/api/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  }, []);
    

    const toggleModal = () => {
        setDeleteModal(false)
    }
   
    const id = thisPost._id
    const handleDelete = (id) => {
        fetch(`/api/posts/${id}`, { method: "DELETE"})
        .then((response) => response.json())
        .then((data) => {
            console.log("ss", data)
           setPosts(posts.filter((post) => posts._id !== id));
           if (data.status === "success") {
            navigate("/")
        } else {
            return null;
        }
        });
    }



  return (
      <>
      {deleteModal ? (
        <div className={m.container}>
            <div className={m.card}>
        <p>are you sure you'd like to delete this post?</p>
        <button onClick={ () => handleDelete(thisPost._id)}>yes</button>
        <button onClick={toggleModal}>no</button>
        </div>
        </div>
        ) : null }
        </>
        )
}

export default DeleteModal
