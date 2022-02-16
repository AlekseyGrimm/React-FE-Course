import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>ADD MOVIE</h1>
        </div>
        <div className="body">
          <p>TITLE</p>
          <input className="inputModal"></input>
          <p>REALEASE DATE</p>
          <input className="inputModal" type="date"></input>
          <p>MOVIE URL</p>
          <input className="inputModal"></input>
          <p>GENRE</p>
          <input className="inputModal"></input>
          <p>OVERVIEW</p>
          <input className="inputModal"></input>
          <p>RUNTIME</p>
          <input className="inputModal"></input>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            RESET
          </button>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
