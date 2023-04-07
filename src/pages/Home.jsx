import React from "react";
import Navigation from "../components/Navigation";
import Films from "../components/Films";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <Navigation />
      <SearchForm />
      {/* <Films /> */}
    </div>
  );
};

export default Home;
