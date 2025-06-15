import React from "react";
import boutiqueimg from "../assets/Peugeot.jpg";
import Acceuil from "../Pages/Acceuil";
import { useState } from "react";
import { use } from "react";
const AcceuilSection1 = () => {

  
  return (
    <div className="sectiongaucheAc " style={{display : "flex"}}  >
      <img
        className="imagegauche"
        src={boutiqueimg}
        style={{ objectFit: "cover" }}
        alt="Peugeot"
      
      />
    </div>
  );
};
export default AcceuilSection1;
