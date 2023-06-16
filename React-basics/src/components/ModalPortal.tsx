import ReactDOM from 'react-dom'
import "./Modal.css";

const Modal = ({children, isOpen, closeModal}: any) => {
  const handleModalContainerClick = (e: React.MouseEvent<HTMLDivElement>) =>{
    e.stopPropagation();
  }
  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
            <button className="modal-close" onClick={closeModal}>X</button>
            {children}
        </div>
    </article>,
    document.getElementById('modal') as HTMLElement  
  );
}

export default Modal