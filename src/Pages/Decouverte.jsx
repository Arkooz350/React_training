import React from "react";
import Nav from "../Composant/Nav";
import Widjet1 from "../Composant/widjet1";
import Widjet2 from "../Composant/widjet2";
import Widjet3 from "../Composant/widjet3";
import image from "../assets/image5.jpg";

const Decouverte = () => {
  return (
    <div className="div1PDecouverte">
      <Nav />
      <div className="ClassH1">
        <img
          id="imgOutils"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/maintenance.png"
          alt="Garage"
        />
        <img
          id="imgResto"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/dining-room.png"
          alt="Restaurant"
        />
        <img
          id="imghouse"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/room.png"
          alt="Chambre"
        />
      </div>
      <div className="SousMenu" >
        <h2>Tools </h2>
        <div style={{overflow:"hidden" , height: "254px"  , width : "1920px" }}>
        <img src={image} style={{objectFit: "cover" ,borderRadius : "45px"}} />
        </div>
        <p>
          Voici quelle que outils qui pourons vous etre utile lors de vos
          recherche de restaurant , garage ou meme un logment a proximité de
          votre lieu de travail
        </p>
      </div>
      <Widjet1 />
      <Widjet2 />
      <Widjet3 />
    </div>
  );
};

export default Decouverte;
