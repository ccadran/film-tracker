import React, { useEffect, useState } from "react";
import axios from "axios";
import Films from "./Films";
const SearchForm = () => {
  const [filmsData, setFilmsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=80b2f79a8e9b927120f24d29d8701a49&language=fr-FR&query=code&page=1&include_adult=false"
      )
      .then((res) => setFilmsData(res.data.results));
  }, []);
  return (
    <div className="search-form">
      <div className="form">
        <input type="text" placeholder="Rechercher un film" id="searchBar" />
      </div>
      <div className="search-filter">
        <button className="filter">Top</button>
        <button className="filter">Flop</button>
      </div>
      <Films filmsData={filmsData} />
    </div>
  );
};

export default SearchForm;
