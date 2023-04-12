import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Favoris = () => {
  const [favorites, setFavorites] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const promises = favorites.map((id) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=80b2f79a8e9b927120f24d29d8701a49&language=fr-FR`
        ).then((response) => response.json())
      );
      const results = await Promise.all(promises);
      setFavorites(results);
    };

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

    getFavorites();
  }, []);

  return (
    <div className="main">
      <div className="films">
        <ul>
          {favorites.map((film, index) => {
            return <Card key={index} film={film} genres={genres} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Favoris;
