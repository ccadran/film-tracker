import React from "react";

const SearchForm = () => {
  return (
    <div className="search-form">
      <h1>Film Tracker</h1>
      <div className="form">
        <input type="text" placeholder="Rechercher un film" />
        <button>Rechercher</button>
      </div>
      <div className="search-filter">
        <button className="filter">Top</button>
        <button className="filter">Flop</button>
      </div>
    </div>
  );
};

export default SearchForm;
