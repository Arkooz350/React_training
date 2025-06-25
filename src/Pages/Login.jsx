import React from "react";
import Nav from "../Composant/Nav";
import "../Style/Login.css";

function LoginComposant() {
  return (
    <>
      <div style={{ justifyItems: "center" }}>
        <Nav />
      </div>
      <div className="FirstBlockDiv">
        <h2>Se connecter</h2>
        <div className="FormularForLogin">
        <label htmlFor="inputMail" /> Adresse-Mail :
        <input id="inputMail" type="text" placeholder="Entrer votre adresse-mail"   /> 
        <label htmlFor="inputPassWord" /> Votre mot de passe :
        <input id="inputPassWord" type="text" placeholder="Entrer votre mot de passe "   /> 
        <br></br>
        <button type="submit">Entrer</button>
        </div>
    
      </div>

    </>
  );
}

export default LoginComposant;
