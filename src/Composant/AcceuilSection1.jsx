import React from "react";
import boutiqueimg from "../assets/Peugeot.jpg";
import Acceuil from "../Pages/Acceuil";
const AcceuilSection1 = () => {
    const HandleMouse = (e)  => {
        console.log(e.target.value)
    }
  return (
    <div className="sectiongaucheAc" onMouseMove={HandleMouse}>
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
