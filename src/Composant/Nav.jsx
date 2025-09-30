import Link from "@mui/material/Link";
import SearchIcon from "@mui/icons-material/Search";
import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LoginIcon from "@mui/icons-material/Login";

const Nav = () => {
  return (
    <div className="flex gap-15 w-110 h-11 bg-amber-400 rounded-2xl  shadow-blue-700 m-10  ">
      <br />

      <ul>
        <NavLink to="/">
          <HomeIcon
            className=" bg-lime-100 rounded-b-sm "
            color="info"
            fontSize="large"
          />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/search">
          <SearchIcon
            color="info"
            className=" bg-lime-100 rounded-b-sm "
            fontSize="large"
          />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/city">
          <LocationCityIcon
            color="info"
            className=" bg-lime-100 rounded-b-sm "
            fontSize="large"
          />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/login">
          <LoginIcon
            className="bg-lime-100 rounded-b-sm "
            fontSize="large"
            color="info"
          />
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
