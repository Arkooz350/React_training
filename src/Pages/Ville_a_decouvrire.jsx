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
  const [show, setShow] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setShow((el) => !el);
    console.log(show);
  };
 
  function Infos({ villeinfos, index }) {
    villeinfos.map
  }

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
        >
          <form>
            <img
              src={image_tower}
              alt="effeil-tower"
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
              Paris
            </label>
            <button
              style={{ height: "50px", width: "50px" }}
              onClick={handleToggle}
            >
              Entrer
            </button>
          </form>
          <form action="">
            <img
              src={image_parc}
              alt="parc"
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
              Parc d'attraction
            </label>
            <button
              style={{ height: "50px", width: "50px" }}
              onClick={handleToggle }
            >
              Entrer
            </button>
          </form>
          <form action="">
            <img
              src={image_plage}
              alt="plage"
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
              Plage
            </label>
            <button
              style={{ height: "50px", width: "50px" }}
              onClick={handleToggle}
            >
              Entrer
            </button>
          </form>
          <form action="">
            <img
              src={image_nice}
              alt="Nice"
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
              Nice
            </label>
            <button
              style={{ height: "50px", width: "50px" }}
              onClick={handleToggle}
            >
              Entrer
            </button>
          </form>
          <form action="">
            <img
              src={image_rennes}
              alt="rennes"
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
              Rennes
            </label>
            <button
              style={{ height: "50px", width: "50px" }}
              onClick={handleToggle}
            >
              Entrer
            </button>
          </form>
        </div>
      </div>
      <div className="Overflow">
        <ComposantA isVisible={show} onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default Ville_a_decouvrire;
