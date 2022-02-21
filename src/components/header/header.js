import React, { useState } from "react";
import "./Header.css";
import SearchButton from "../buttons/SearchButton";
import Modal from "../modal/modal";
import TopText from "../topText/topText";
import BackgroundImage from "../backgroundImage/backgroundImage";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div class="wraperHeader">
        <BackgroundImage />
        <div className="top-wraper">
        <TopText />
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
        </div>
        <div class="Header">
          <div className="header-text">FIND YOU MOVIE</div>
          <div className="header-search"><SearchButton /></div>          
        </div>
      </div>
    </>
  );
};

export default Header;
