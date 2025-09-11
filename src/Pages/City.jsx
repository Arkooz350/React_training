import React, { use } from "react";
import Nav from "../Composant/Nav";
import { useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import '../Style/Afficher.css'

function Ville_a_decouvrire() {
  const [villeChoisi, setVilleChoisi] = useState();

  const displayVille = () => {};
  return (
    <div className="mainDiv">
      <div className="NavDiv">
        <Nav />
      </div>
      <label id="Breadcrumbs">
        
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            {" "}
            Acceuil
          </Link>

          <Typography sx={{ color: "#bff23d" }}>Ville</Typography>
        </Breadcrumbs>
      </label>
      <h2 id="h1Decouverte"> Découvrer nos agence dans plusieurs ville en France ! </h2>
      <option></option>
    </div>
  );
}

export default Ville_a_decouvrire;
