import React, { useEffect, useState } from "react";

const Card = ({ film }) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [liked, setLiked] = useState(false);

  const handleAddToFavorites = () => {
    if (favorites.includes(film.id)) {
      const index = favorites.indexOf(film.id);
      favorites.splice(index, 1);
      setLiked(false);
    } else {
      favorites.push(film.id);
      setLiked(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <li className="card">
      <i className={"fa-solid fa-heart heart" + (liked ? " like" : "")} />

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
      <button
        onClick={handleAddToFavorites}
        className={favorites.includes(film.id) ? "added" : ""}
      >
        {favorites.includes(film.id)
          ? "Supprimer des Favoris"
          : "Ajouter aux favoris"}
      </button>
    </li>
  );
};

export default Card;
