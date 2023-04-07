import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Films = () => {
  const [filmsData, setFilmsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=80b2f79a8e9b927120f24d29d8701a49&language=fr-FR&query=code&page=1&include_adult=false"
      )
      .then((res) => setFilmsData(res.data.results));
  }, []);
  return (
    <div className="main">
      <div className="films">
        <ul>
          {console.log(filmsData)}
          {filmsData.map((film, index) => {
            return <Card key={index} film={film} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Films;
