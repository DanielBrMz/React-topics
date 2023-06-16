import React from 'react'
import "./Modal.css";

const Modal = ({children, isOpen, closeModal}: any) => {
  const handleModalContainerClick = (e: React.MouseEvent<HTMLDivElement>) =>{
    e.stopPropagation();
  }
  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
            <button className="modal-close" onClick={closeModal}>X</button>
            {children}
        </div>
    </article>   
  )
}

export default Modal