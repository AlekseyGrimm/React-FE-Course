import React, { useState } from "react";
import "./Header.css";
import SearchButton from "../buttons/SearchButton";
import Modal from "../modal/modal";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* <img src="https:#" class='blurImg' alt="img" /> */}
      <div class="wraperHeader">
        {/* modal */}
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          + ADD MOVIE
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}

        <div class="Header">
          <p>FIND YOU MOVIE</p>
          <SearchButton />
        </div>
      </div>
    </>
  );
};

export default Header;
