import React, { use } from "react";
import image_tower from "../assets/effeil_tower.jpeg";
import image_parc from "../assets/parc.jpeg";
import image_nice from "../assets/nice.jpeg";
import image_plage from "../assets/plage.jpeg";
import image_rennes from "../assets/rennes.jpeg";
import Nav from "../Composant/Nav";
import Afficher from "../Composant/VilleAfficher/Afficher";
import Detail_Ville from "../Composant/ComposantPageVille_a_decouvrire/Detail_Ville";
import { useState } from "react";
import ComposantA from "../Composant/VilleAfficher/Afficher";
import { villeinfos } from "../Composant/Tableaux/TableauxVille";
import { Children } from "react";

function Ville_a_decouvrire({ isVisible, onToggle }) {

  const [villeChoisi , setVilleChoisi ] = useState()
  const handleToggle = (e , ville) => {
    e.preventDefault()
    setVilleChoisi(ville)
    console.log(ville);
  };
  const displayVille = () => {
     return villeinfos.map((el) => (
    <div>
        <img
          src={el.image}
          alt={el.alt}
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "40px",
            cursor: "pointer",
          }}
        />
        <label
          style={{
            display: "block",
            background: "grey",
            borderRadius: "5px",
            opacity: "40%",
          }}
        >
          {el.name}
        </label>
        <button
          style={{ height: "50px", width: "50px" }}
          onClick={(e)=> handleToggle(e ,el)
          }
        >
          Afficher plus + 
        </button>
   </div>
    ));
  };
  return (
    <div className="mainDiv">
      <Nav />
      <div
        className="SousMenu"
        style={{
          display: "block",
          background: "#f5cb5c",
          marginTop: "5em",
          borderRadius: "15px",
          justifyItems: "center",
        }}
        
      >
       
        <div
          className="imgDiv"
          style={{
            display: "flex",
            gap: "2em",
            marginTop: "5em",
            justifyContent: "center",
          }}
        > {displayVille()}</div>
      </div>
      <div className="Overflow" >
         {villeChoisi &&  <ComposantA  onToggle={handleToggle}
         text={villeChoisi.text}/>}
      </div>
    </div>
  );
}

export default Ville_a_decouvrire;
