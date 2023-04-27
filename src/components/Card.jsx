import React, { useEffect, useState } from "react";
import axios from "axios";
import Popup from "./Popup";

const Card = ({ film }) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [liked, setLiked] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=80b2f79a8e9b927120f24d29d8701a49&language=fr-FR"
      )
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToFavorites = () => {
    if (favorites.includes(film.id)) {
      const index = favorites.indexOf(film.id);
      favorites.splice(index, 1);
      setLiked(false);
      window.location.reload();
    } else {
      favorites.push(film.id);
      setLiked(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

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
      <p id="release">
        {" "}
        Sortie le :{" "}
        {new Date(film.release_date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })}
      </p>
      <h4>
        {film.vote_average.toFixed(1)}/10 <i class="fa-solid fa-star"></i>
      </h4>
      <ul id="genres">
        {genres.length > 0 && film.genre_ids && film.genre_ids.length > 0
          ? film.genre_ids.map((id) => {
              const genre = genres.find((genre) => genre.id === id);
              return genre ? <li key={genre.id}>{genre.name}</li> : null;
            })
          : null}
      </ul>
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
