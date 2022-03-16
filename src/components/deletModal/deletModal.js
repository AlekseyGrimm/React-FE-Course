import React from "react";
import "./deletModal.css";
import SendButton from "../sendButton/sendButton";

const DeleteModal = (props) => {
    const modalRef = React.createRef();
  
    const handleOutsideClick = (event) => {
      if (modalRef.current.contains(event.target)) {
        return;
      }
      props.handleDeleteModal();
    }
  
    return (
      <div className="modal">
        <div className="modal-wrapper" onClick={handleOutsideClick}>
          <div className="modal-container" ref={modalRef}>
            <div className="modal-close" onClick={props.handleDeleteModal}></div>
            <div className="modal-content">
              <h2 className="modal-title">Delete movie</h2>
              <p className="modal-subtitle">Are you sure you want to delete this movie?</p>
            </div>
            <div className="modal-button">
            <SendButton text="confirm" handleClick={props.handleDeleteModal} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteModal;