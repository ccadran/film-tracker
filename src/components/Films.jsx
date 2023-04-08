import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Films = ({ filmsData }) => {
  return (
    <div className="main">
      <div className="films">
        {filmsData.length === 0 ? (
          <h1>Veuillez chercher un Film</h1>
        ) : (
          <ul>
            {filmsData.map((film, index) => {
              return <Card key={index} film={film} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Films;
