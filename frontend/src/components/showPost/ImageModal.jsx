import React from 'react'
import modal from "./ImageModal.module.css"

//
function ImageModal( { showModal, setShowModal, imgId } ) {
  // console.log(imgId)
    
    const toggleModal = () => {
        setShowModal(prev => !prev)
    }

  return (
    <>
        {showModal ? (
            <div className={modal.show}>
                <img className={modal.bigImage} 
                src={imgId}
                alt=""  
                />
              <span className={modal.closebutton}
              onClick={toggleModal}>
                close</span>  
            </div>
        ): null }
    </>
  )
}

export default ImageModal
