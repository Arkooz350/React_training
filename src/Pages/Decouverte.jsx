import React from "react";
import Nav from "../Composant/Nav";
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
    
       <section className="WidjetText1">
        <img
          id="imgResto"
          width="50"
          height="50"
          src="https://img.icons8.com/3d-fluency/94/dining-room.png"
          alt="Restaurant"
        />
        <p>Tu veux trouvez les meilleur restaurant Halal dans le coin ?</p>
      </section>
       <section className="WidjetText2">
        <img
          id="imgOutils"
          width="50"
          height="50"
          src="https://img.icons8.com/3d-fluency/94/maintenance.png"
          alt="Garage"
        />
        <p>Trouve le meilleur garage proche de chez toi ! </p>
      </section>
       <section className="WidjetText3">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/3d-fluency/94/room.png"
          alt="room"
        />
        <p>Touve ton logement proche de ton lieu de travail !</p>
      </section>
    </div>
  );
};

export default Decouverte;
