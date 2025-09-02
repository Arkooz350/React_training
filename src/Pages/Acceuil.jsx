import React from "react";
import Nav from "../Composant/Nav";
import Peugeot from "../assets/Peugeot.jpg";
import Citroen from "../assets/citroen.jpeg";
import Toyota from "../assets/Toyota.jpg";
import LoadingButtonGroup from "../Composant/Select";
import Jour from "../Composant/Jour";
import Select from "@mui/material/Select";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { car } from "../Composant/Tableaux/ShowCar";
import ComposantCitroenAccueil from "../Composant/ComposantPageAcceuil/ComposantCar/ComposantCitroenAccueil";
import ShowPriceOpacity from "../Composant/ComposantPageAcceuil/ComposantCar/ShowPriceOpacity";


const Acceuil = () => {
  const [click, setclick] = useState();
  return (
    <div
      className="divAcceuil"
      style={{ display: "inline-block", justifyItems: "center" }}
    >
      <Nav />

      <div
        className="middletextAc"
        style={{
          display: "inline-block",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "10em",
        }}
      >
        <div className="Test"></div>
        <h1>Bienvenue sur votre solution de mobilité groupe !</h1>
        <p>
          Nous révolutionnons la location de véhicules spacieux en proposant des
          minibus 9 places neufs et parfaitement entretenus à des tarifs défiant
          toute concurrence.<br></br> Que ce soit pour un voyage en famille, une
          sortie d'entreprise ou un événement sportif,<br></br> nous avons la
          solution idéale pour vous.{" "}
        </p>
        <div className="allimage">
          {car.map((vehicle) => {
            return (
              <ComposantCitroenAccueil key={vehicle.id} vehicle={vehicle} />
            );
          })}
        </div>
        <div className="BlockForm">
          <div className="InputGo" style={{ margin: "10% auto" }}>
            <TextField
              id="filled-basic"
              label="Lieu de prise en charge"
              variant="filled"
            />
            <LoadingButtonGroup />

            <Jour />
            <input type="date" placeholder="DateduVoyage" />
            <input type="time"></input>
            <Button
              variant="outlined"
              style={{
                background: "grey",
                color: "black",
                marginTop: "15px",
                border: "none",
              }}
            >
              Recherche
            </Button>
          </div>
        </div>
      </div>

      <div className="allblock1" style={{ display: "flex", gap: "20em" }}>
        <div className="block1info">
        </div>
        <div className="block2conso"></div>
      </div>
    </div>
  );
};

export default Acceuil;
