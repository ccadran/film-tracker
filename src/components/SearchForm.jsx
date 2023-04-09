import React, { useEffect, useState } from "react";
import axios from "axios";
import Films from "./Films";

const SearchForm = () => {
  const [filmsData, setFilmsData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentSort, setCurrentSort] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=80b2f79a8e9b927120f24d29d8701a49&language=fr-FR&query=" +
          search +
          "&page=1&include_adult=false"
      )
      .then((res) => setFilmsData(res.data.results));
  }, [search]);

  const handleSort = (sortType) => {
    let sortedFilms = [...filmsData];
    if (sortType === "Top") {
      sortedFilms.sort((a, b) => b.vote_average - a.vote_average);
    } else {
      sortedFilms.sort((a, b) => a.vote_average - b.vote_average);
    }
    setFilmsData(sortedFilms);
    setCurrentSort(sortType);
  };

  return (
    <div className="search-form">
      <div className="form">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Rechercher un film"
          id="searchBar"
        />
      </div>
      <div className="search-filter">
        <button
          className={currentSort === "Top" ? "filter active" : "filter"}
          onClick={() => handleSort("Top")}
        >
          Top
          <i class="fa-solid fa-arrow-up" id="up"></i>
        </button>
        <button
          className={currentSort === "Flop" ? "filter active" : "filter"}
          onClick={() => handleSort("Flop")}
        >
          Flop
          <i class="fa-solid fa-arrow-down" id="down"></i>
        </button>
      </div>
      <Films filmsData={filmsData} />
    </div>
  );
};

export default SearchForm;
