import Link from "@mui/material/Link";

import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let handleClick = "";
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
        onSubmit={
          (handleClick = (click) => {
            click.preventDefault();
            console.log(click);
          })
        }
        to="/Decouverte"
        style={{ textDecoration: "none", color: "blue" }}
      >
        To discover{" "}
      </NavLink>
    </div>
  );
};

export default Nav;
