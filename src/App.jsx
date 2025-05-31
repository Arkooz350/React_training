import "./App.css";

import { use, useState } from "react";

function Menu() {
  const [nom, setNom] = useState(1);
  const HandleClick = () => {
    setNom(nom + 1);
    console.log(nom);
  };
  const [retire, setRetire] = useState(nom);
  const retirevalue = () => {
    setNom(retire - 1);
    console.log(retire);
  };
  const [tableau, setTableau] = useState([
    { id: 1, nom1: "TOTO" },
    { id: 2, nom1: "TiTi" },
    { id: 3, nom1: "BELLA" },
  ]);
  const Tableau = (el) => {
    const TableauEcla = console.log([...tableau]);
    console.log(el)
  };
  return (
    <div>
      <h1>Bienvenue dans mon web app</h1>
      <nav>
        <h2> Nombre ajouter :{nom}</h2>
        <h2> Nombre enlever :{retire}</h2>
        <button onClick={HandleClick} id="btn1">
          Ajouter
        </button>
        <button onClick={retirevalue} id="btn2">
          Retirer
        </button>
        <h2> { (p) =>  {tableau.p.nom1}}</h2>
        <button onClick={Tableau}> OKKK
        </button>
      </nav>
      <ul id="listemenu">
        <li>Service</li>
        <li>A propos</li>
        <li>Nous contacter</li>
      </ul>
    </div>
  );
}
export default Menu;
