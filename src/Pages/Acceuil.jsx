import React from "react";
import Nav from "../Composant/Nav";
import AcceuilSection1 from "../Composant/AcceuilSection1";
import AcceuilSection2 from "../Composant/AcceuilSection2";
import AcceuilSection3 from "../Composant/AcceuilSection3";
import imageLogment from "../assets/logment.jpg"
import imageGarage from "../assets/garage.jpg"
import imagepizza from "../assets/boutiquepizza.jpg"

const Acceuil = () => {





  return (
    <div className="divAcceuil" style={{ justifyItems: "center" }}>
      <Nav />
      <section
        className="Section1"
        style={{ display: "flex", textAlign: "center" }}
      >
        <h2>
          Bienvenue !
          <p>
            Ce site permet de trouvez des outils les plus performent du net !{" "}
          </p>
        </h2>
      </section>
      <AcceuilSection1 />
      <AcceuilSection2 />
      <AcceuilSection3 />
      <div className="middletextAc">
        <h3>
          Simplifiez votre quotidien avec nos outils de recherche intelligents
        </h3>
        <p>
          La vie moderne nous pousse constamment à chercher les meilleures
          solutions autour de nous. <br></br> ce soit pour savourer un délicieux
          repas,<br></br>entretenir votre véhicule ou dénicher le logement
          parfait,<br></br> nous avons créé les outils qu'il vous faut pour
          gagner du temps et faire les bons choix.<br></br>{" "}
        </p>
      </div>
    </div>
  );
};

export default Acceuil;
