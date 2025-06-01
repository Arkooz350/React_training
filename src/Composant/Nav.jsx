import React from "react";
import { Links, NavLink } from "react-router";
import Acceuil from "../Pages/Acceuil";
import Decouverte from "../Pages/Decouverte";


const Nav = () => {
  return (
    <div className="=navigation">
      <ul>
        <NavLink to="/Acceuil" >
        <li>{Acceuil}</li>
        </NavLink>
        <NavLink to="/Decouverte">
        <li>{Decouverte}</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
