import React, { useContext, useEffect } from "react";
import Nav from "../Composant/Nav";
import SelectGroupCustum from "@/Composant/ComposantPageAcceuil/SelectGroupCustum";
import { useState } from "react";
import { car } from "../Composant/Tableaux/ShowCar";
import ComposantCitroenAccueil from "../Composant/ComposantPageAcceuil/ComposantCar/ComposantCitroenAccueil";
import IconAcc from "@/Composant/ComposantPageAcceuil/IconAcc";
import { DataStatusLogin } from "@/utils/ContextLogin";
import DataCaravailable from "@/Composant/ComposantPageAcceuil/DataCarAvailable";
import Footer from "./Footer";
import TableData from "@/Composant/ComposantPageAcceuil/ComposantCar/TableData";

const Acceuil = () => {
  const value = useContext(DataStatusLogin);

  const [click, setclick] = useState();
  const [place, setplace] = useState("");
  const [selectcar, setselectcar] = useState("");
  const handleSelectCar = (event) => {
    setselectcar(event);
  };

  return (
    <div
      className=" m-10"
      style={{ display: "inline-block", justifyItems: "center" }}
    >
      <Nav />

      <div className="inline-block justify-center text-center mb-10 ">
        <div className="Test"></div>
        <h1 className=" inline-flex font-extrabold bg-gray-400 text-blue-800">
          Bienvenue sur votre solution de mobilité groupe !
        </h1>
        <p className="font-light italic leading-normal">
          Nous révolutionnons la location de véhicules spacieux en proposant des
          minibus 9 places neufs et parfaitement entretenus à des tarifs défiant
          toute concurrence.<br></br> Que ce soit pour un voyage en famille, une
          sortie d'entreprise ou un événement sportif,<br></br> nous avons la
          solution idéale pour vous.{" "}
        </p>
        <br />
        <div className="allimage">
          {car.map((vehicle) => {
            return (
              <ComposantCitroenAccueil key={vehicle.id} vehicle={vehicle} />
            );
          })}
        </div>
        <div className="m-5">
          <SelectGroupCustum></SelectGroupCustum>
        </div>
      </div>

      <div className="allblock1" style={{ display: "flex", gap: "20em" }}>
        <div className="block1info"></div>
        <div className="block2conso"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Acceuil;
