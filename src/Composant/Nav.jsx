import Link from "@mui/material/Link";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LoginIcon from '@mui/icons-material/Login';
const Nav = () => {
  return (
    <div className="navigation" >
      <ul>
        <NavLink 
          to="/"
          className="NavAcceuil"
        >
     <HomeIcon color="primary" fontSize="large"/>
        </NavLink>
      </ul>
      <ul>
      <NavLink
        to="/Decouverte"
      >
      <SearchIcon color="primary" fontSize="large"/>
      
      </NavLink>
      </ul>
      <ul>
        <NavLink to="/ville_a_decouvrire"  >
          
         <LocationCityIcon color="primary" fontSize="large"/></NavLink>
     </ul>
     <ul>
      <NavLink to="/login">
<LoginIcon fontSize="large" color="primary"/>
      </NavLink>
     </ul>
    </div>
  );
};

export default Nav;
