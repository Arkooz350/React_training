import React from "react";
import Nav from "../Composant/Nav";
import AcceuilSection1 from "../Composant/AcceuilSection1";
import AcceuilSection2 from "../Composant/AcceuilSection2";
import AcceuilSection3 from "../Composant/AcceuilSection3";

import HandleMouse from "../Composant/AcceuilSection1";
import LoadingButtonGroup from "../Composant/Select";
import RequetApi from "../Composant/RequetApi";
import Compteur from "../Composant/Compteur";
import Jour from "../Composant/Jour";
import SousBlock from "../Composant/SousBlock";
import Select from "@mui/material/Select";
import FirstDiv from "../Composant/FirstDiv";
import { useState } from "react";
import { use } from "react";
import { useEffect } from "react";

const Acceuil = () => {
  const [rt, Setrt] = useState(false);
  const handleMouse1 = (event) => {
    const car = event.target.alt;
  };


  return (
    <div className="divAcceuil" style={{ justifyItems: "center" }}>
      <Nav />
      
      <div
        className="middletextAc"
        style={{
          display: "block",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "10em",
        }}
      >
        <h1>Bienvenue sur votre solution de mobilité groupe !</h1>
        <p>
          Nous révolutionnons la location de véhicules spacieux en proposant des
          minibus 9 places neufs et parfaitement entretenus à des tarifs défiant
          toute concurrence.<br></br> Que ce soit pour un voyage en famille, une
          sortie d'entreprise ou un événement sportif,<br></br> nous avons la
          solution idéale pour vous.{" "}
        </p>
        <div className="allimage" onMouseMove={handleMouse1}>
          <AcceuilSection1 />
          <AcceuilSection2 />
          <AcceuilSection3 />
        </div>
      </div>
      <form>
        <LoadingButtonGroup />
        <Jour />
      </form>
      <div className="allblock1" style={{ display: "flex", gap: "20em" }}>
        <div className="block1info">
          <SousBlock />
        </div>
        <div className="block2conso"></div>
      </div>
    </div>
  );
};

export default Acceuil;
