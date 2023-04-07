import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fav from "./pages/Fav";
import "./style/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoris" element={<Fav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
