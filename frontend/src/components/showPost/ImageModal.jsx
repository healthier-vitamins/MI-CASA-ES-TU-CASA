import React from 'react'

//
function ImageModal( { showModal, setShowModal, imgId } ) {
  console.log(imgId)
    
    const toggleModal = () => {
        setShowModal(prev => !prev)
    }

  return (
    <>
        {showModal ? (
            <div className="show-modal">
                <img className="bigImage" 
                src={imgId}
                alt=""  
                />
              <span className="close-button"
              onClick={toggleModal}>
                close</span>  
            </div>
        ): null }
    </>
  )
}

export default ImageModal
