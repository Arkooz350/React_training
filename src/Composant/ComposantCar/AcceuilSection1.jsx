import React from "react";
import Acceuil from "../../Pages/Acceuil";
import { useState } from "react";
import { use } from "react";
const AcceuilSection1 = ({mousemouve1}) => {
  const handleMouse = (e)=> {
console.log(e)
  }
  
  return (
    <div onMouseMove={handleMouse} className="sectiongaucheAc " style={{display : "flex"}}  >
     
    </div>
  );
};
export default AcceuilSection1;
