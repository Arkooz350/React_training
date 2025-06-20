import React, { createElement } from "react";
import Acceuil from "../../../Pages/Acceuil";
import { car } from "../../Tableaux/ShowCar";
import { useState } from "react";

const ComposantCitroenAccueil = ({ text, move,  }) => {
  const [divText, setdivText] = useState(false);
  const divStyle = {
    transform: "translateX(45px)",
    background: "red",
  };
  console.log(move);
  console.log(text);
  const textShow = car.map((el) => el.carac);
  console.log(textShow);
  for (let index = 0; index < textShow.length; index++) {
    const element = textShow[index];
  }
  return (
    <div className="DivCarac">
      <h3>{textShow}</h3>
    </div>
  );
};

export default ComposantCitroenAccueil;
