import Link from "@mui/material/Link";

import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation" style={{ textAlign: "center" }}>
      <ul>
        <NavLink
          to="/"
          className="NavAcceuil"
          style={{ textDecoration: "none", color: "blue" }}
        >
          Home🏠
        </NavLink>
      </ul>
      <NavLink
        to="/Decouverte"
        style={{ textDecoration: "none", color: "blue" }}
      >
        To discover{" "}
      </NavLink>
      <ul>
        <NavLink to="/ville_a_decouvrire"  style={{ textDecoration: "none", color: "blue" }}>
          
         Ville a découvrire</NavLink>
     </ul>
    </div>
  );
};

export default Nav;
