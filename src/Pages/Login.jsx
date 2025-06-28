import React, { useEffect, useState } from "react";
import Nav from "../Composant/Nav";
import "../Style/Login.css";
import Button from "@mui/material/Button";

function LoginComposant() {
  const [inputs, setInputs] = useState({
    email: "",
    passwordNumber: "",
  });
  const handleChange = (e) => {};
  const [action, setaction] = useState(false);
  const [save, setsave] = useState({});
  const [error, setErrors] = useState({});
  const [errorpassWord, setErrorspassWord] = useState();
  const emailtrack = (vl) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(vl);
  };
  const passwordCheck = (value) => {
    const passwordregex = /^[0-9]*$/;
    return passwordregex.test(value);
  };

  console.log(inputs.passwordNumber);
  console.log(errorpassWord);

  return (
    <>
      <div style={{ justifyItems: "center" }}>
        <Nav />
      </div>

      <div className="FirstBlockDiv">
        <h2>Se connecter</h2>
        <div className="FormularForLogin">
          <label htmlFor="inputMail" /> Adresse-mail :
          <form action={(e) => setaction(true)(
            
          )}>
            <input
              required
              value={inputs.email}
              onChange={(e) =>
                setInputs((el) => ({ ...el, email: e.target.value }))
              }
              onBlur={(e) => {
                if (e.target.value && !emailtrack(e.target.value)) {
                  setErrors((prev) => ({
                    ...prev,
                    email: "❌ votre email n'ai pas valide",
                  }));
                } else {
                  setErrors((prev) => ({ ...prev, email: " ✅ email valide" }));
                }
              }}
              id="inputMail"
              type="email"
              placeholder="Entrer votre adresse-mail"
            />
            {error.email && <p className="ClassShowResponse">{error.email}</p>}
            <label htmlFor="inputPassWord" /> Mot de passe :
            <input
              id="inputPassWord"
              type="text"
              placeholder="Entrer votre mot de passe "
              onChange={(e) =>
                handleChange(
                  setInputs((prev) => ({
                    ...prev,
                    passwordNumber: e.target.value,
                  }))
                )
              }
              onBlur={(e) => {
                if (e.target.value && !passwordCheck(e.target.value)) {
                  setErrorspassWord(
                    (el) => ({
                      ...el,
                      passwordNumber: "Entrer un mot de passe avec 8 chiffres",
                    }),
                    e.target.value.trim(inputs.passwordNumber)
                  );
                } else {
                  setErrorspassWord((el) => ({
                    ...el,
                    passwordNumber: "mot de passe valide",
                  
                  }));
                }
              }}
            />
            <br></br>
            <Button
              type="submit"
              style={{ backgroundColor: "GrayText", justifyItems: "center" }}
            >
              {" "}
              Entrer
            </Button>
          </form>
          <br />
          <br />
          <link href="#" />
          Mot de passe Oublier ?
        </div>
      </div>
    </>
  );
}

export default LoginComposant;
