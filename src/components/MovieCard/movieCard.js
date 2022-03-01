import React, {useState} from "react";
import "./MovieCard.css";
import DeleteModal from "../deletModal/deletModal";

const MovieCard = (props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  }

  return (
    <div className="movie-wrap">
      <div className="movie-poster">
        <img className="movie-card" id={props.data.id} src={props.data.poster_path} alt={props.data.title} />

        {!props.showOptions ?
          <div className="dot" onClick={(event) => props.handleClick(event, props.data.id)}></div>
          : <div className="conteiner-modal">
            <div className="modal-close">x</div>
            <div className="modal-edit">Edit</div>
            <div className="modal-delete" onClick={handleDeleteModal}>Delete</div>
          </div>}
        {openDeleteModal && <DeleteModal handleDeleteModal={handleDeleteModal} />}

      </div>
      <div className="movie-description">
        <div className="movie-title">
          <h3>{props.data.title}</h3>
          <p className="movie-date-realise">{props.data.release_date.split('-')[0]}</p>
        </div>
        <div className="movie-genre">{props.data.genres.join(', ')}</div>
      </div>
    </div>
  );
};

export default MovieCard;
