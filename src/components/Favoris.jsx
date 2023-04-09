import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Favoris = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const promises = favorites.map((id) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=80b2f79a8e9b927120f24d29d8701a49`
        ).then((response) => response.json())
      );
      const results = await Promise.all(promises);
      setFavorites(results);
    };

    getFavorites();
  }, []);

  return (
    <div className="main">
      <div className="films">
        <ul>
          {favorites.map((film, index) => {
            return <Card key={index} film={film} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Favoris;
