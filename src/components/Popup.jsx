import React from "react";

const Popup = ({ film, handleClose }) => {
  return (
    <div className="popup">
      <h1>{film.title}</h1>
      <button className="popup-close" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default Popup;
