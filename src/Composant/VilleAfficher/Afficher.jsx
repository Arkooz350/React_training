import React from "react";
import Ville_a_decouvrire from "../../Pages/City";
import { useState } from "react";
import "../../Style/Afficher.css";

function ComposantA({ text }) {
  return (
    <div>
      <div>
        <div className="DivTrueComposantA">
          <p>{text}</p>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default ComposantA;
