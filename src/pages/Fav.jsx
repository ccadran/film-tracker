import React from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Favoris from "../components/Favoris";

const Fav = () => {
  // const favorites = JSON.parse(localStorage.getItem("favorites"));
  // console.log(favorites);

  return (
    <div>
      <Navigation />
      <Favoris />
    </div>
  );
};

export default Fav;
