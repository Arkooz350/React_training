import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav.active" : "")}>
          Home🏠
        </NavLink>
      </ul>
      <NavLink
        to="/Decouverte"
        className={(nav) => (nav.isActive ? "nav.active" : "")}
      >
        To discover 🔎
      </NavLink>
    </div>
  );
};

export default Nav;
