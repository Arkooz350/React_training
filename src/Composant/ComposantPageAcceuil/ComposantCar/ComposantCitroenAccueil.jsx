import React, { createElement } from "react";
import Acceuil from "../../../Pages/Accueil";
import { car } from "../../Tableaux/ShowCar";
import { useState, memo } from "react";
import ShowPriceOpacity from "./ShowPriceOpacity";

export default function ComposantCitroenAccueil({ vehicle }) {
  const [look, setLook] = useState(false);
  return (
    <div
      key={vehicle.id}
      className=" block overflow-hidden duration-300 transform  "
    >
      <img
        onMouseEnter={() => setLook(true)}
        onMouseLeave={() => setLook(false)}
        className={"img" + vehicle.alt}
        src={vehicle.src}
        alt={vehicle.alt}
        style={{
          width: "950px",
          height: "400px",
          borderRadius: "50px",
        }}
      ></img>
      {look && (
        <div className="DivCarac flex">
          <h3 className="flex justify-center capitalize font-bold">
            {vehicle.carac}
          </h3>
        </div>
      )}
      {look && <ShowPriceOpacity sendDataAll={vehicle} />}
    </div>
  );
}
