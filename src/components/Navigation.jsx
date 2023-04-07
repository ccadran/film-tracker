import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Acceuil</li>
        </NavLink>

        <NavLink
          to="/favoris"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Coup de coeurs</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
