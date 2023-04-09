import React from "react";

const Card = ({ film }) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const handleAddToFavorites = () => {
    if (!favorites.includes(film.id)) {
      favorites.push(film.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

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
      <button
        onClick={handleAddToFavorites}
        className={favorites.includes(film.id) ? "added" : ""}
      >
        {favorites.includes(film.id) ? "Favoris" : "Ajouter aux favoris"}
      </button>
    </li>
  );
};

export default Card;
