import Acceuil from "../Pages/Acceuil";
import React, { useState } from "react";

const Formular = (i) => {
  const [form, Setform] = useState();
  return (
    <div className="form">
      <form>
        <label>
          Entrer votre nom :<input name="inputNom" />
          Entrer votre prenom :<input name="inputPrenom" />
          Entrer votre age :<input type="number" name="inputAge" min="15" />
        </label>
      </form>
    </div>
  );
};

export default Formular;
