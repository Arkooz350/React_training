import React from "react";
import boutiqueimg from "../assets/Peugeot.jpg";
import Acceuil from "../Pages/Acceuil";
import { useState } from "react";
import { use } from "react";
const AcceuilSection1 = () => {
  function HandleMouseX(event) {
    const [HMX ,SetHMX] = useState (0)
    const HandleMouseX = event.clientX;
    console.log(HandleMouseX);
  }
  function HandleMouseY(event) {
    const [HMY, SetHMY] = useState (0)
    const HandleMouseY = event.clientY
    console.log(HandleMouseY)
  }

  return (
    <div className="sectiongaucheAc"  >
      <img
        className="imagegauche"
        src={boutiqueimg}
        style={{ objectFit: "cover" }}
        alt="boutiquepizza"
      />
    </div>
  );
};
export default AcceuilSection1;
