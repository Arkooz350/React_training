import React from "react";
import Nav from "../Composant/Nav";
import AcceuilSection1 from "../Composant/AcceuilSection1";
import AcceuilSection2 from "../Composant/AcceuilSection2";
import AcceuilSection3 from "../Composant/AcceuilSection3";
import imageLogment from "../assets/logment.jpg";
import imageGarage from "../assets/garage.jpg";
import imagepizza from "../assets/boutiquepizza.jpg";
import HandleMouse from "../Composant/AcceuilSection1";
import LoadingButtonGroup from "../Composant/button";

const Acceuil = (e) => {
  console.log(e);
  if (imagepizza >= imageLogment) {
  }
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
        <div className="allimage">
          <AcceuilSection1 />
          <AcceuilSection2 />
          <AcceuilSection3 />
        </div>
      </div>
      <LoadingButtonGroup />
    </div>
  );
};

export default Acceuil;
