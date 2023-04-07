import React from "react";

const Card = ({ film }) => {
  return (
    <li className="card">
      <div className="img-container">
        <img
          src={"https://image.tmdb.org/t/p/original/" + film.poster_path}
          alt=""
        />
      </div>
      <h2>{film.title}</h2>
      <p id="release"> Sortie le : {film.release_date}</p>
      <h3>{film.vote_average}/10</h3>
      <h3>Synopsis</h3>
      <p id="synopsis">{film.overview}</p>
      <button>Ajouter aux coups de coeurs</button>
    </li>
  );
};

export default Card;
