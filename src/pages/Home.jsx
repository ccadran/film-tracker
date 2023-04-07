import React from "react";
import Navigation from "../components/Navigation";
import SearchForm from "../components/SearchForm";
import Films from "../components/Films";

const Home = () => {
  return (
    <div>
      <Navigation />
      <SearchForm />
      <Films />
    </div>
  );
};

export default Home;
