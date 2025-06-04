import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation" style={{ textAlign : "center" }}>
      <ul>
        <NavLink to="/" className='NavAcceuil'>Home🏠</NavLink>
      </ul>
      <NavLink to="/Decouverte" >To discover </NavLink>
    </div>
  );
};

export default Nav;
