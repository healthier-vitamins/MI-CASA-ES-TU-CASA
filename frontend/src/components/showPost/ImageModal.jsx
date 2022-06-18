import React from 'react'

//
function ImageModal( {showModal, setShowModal} ) {
    
    const handleModal = () => {
        setShowModal(prev => !prev)
    }

  return (
    <>
        {showModal ? (
            <div className="show-modal">
                <img className="bigImage" 
                src="https://i.imgur.com/woBZD95.jpeg" 
                alt="" 
                onClick={handleModal}
                />
            </div>
        ): null }
    </>
  )
}

export default ImageModal
