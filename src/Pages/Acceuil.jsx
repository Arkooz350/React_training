import React from "react";
import Nav from "../Composant/Nav";
import Peugeot from "../assets/Peugeot.jpg"
import Citroen from "../assets/citroen.jpeg"
import Toyota from "../assets/Toyota.jpg"
import LoadingButtonGroup from "../Composant/Select";
import Jour from "../Composant/Jour";
import SousBlock from "../Composant/SousBlock";
import Select from "@mui/material/Select";
import FirstDiv from "../Composant/FirstDiv";
import { useState } from "react";
import { use } from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import BasicSelect from "../Composant/ComposantPageAcceuil/SelectTimeToRent";
import Button from "@mui/material/Button";


const Acceuil = (mouse) => {
  const handleMouse = (e) => {
    const [mouse, setmouse] = useState()
    
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
         <img
        className="imagePeugeot"
        src={Peugeot}
        style={{ objectFit: "cover" }}
        alt="Peugeot"
      
      />
          <img
                className="imgToyota"
                src={Toyota}
                alt="Toyota"
                style={{
                  width: "500px",
                  height: "400px",
                  borderRadius: "50px",
                  objectFit: "cover",
                }}
              ></img>
          <img
                className="imgCitroen"
                src={Citroen}
                alt="Citroen"
                style={{
                  width: "500px",
                  height: "400px",
                  borderRadius: "50px",
                  objectFit: "cover",
                }}
              ></img>


        </div>
        <div className="BlockForm">
        <div className="InputGo" style={{margin:"10% auto" }}>
          <TextField
            id="filled-basic"
            label="Lieu de prise en charge"
            variant="filled"
          />
          <LoadingButtonGroup />
          
          <Jour />
          <input type="date" placeholder="DateduVoyage"  />
          <input type ="time"></input>
  <Button variant="outlined" style={{background:"grey" , color:"black" ,marginTop:"15px", border:"none"}}>Outlined</Button>
        </div>
        </div>
        
      </div>

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
