import "../Style/register.css";
import Nav from "../Composant/Nav";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import axios from "axios";
import { data, useNavigate } from "react-router";

function Register() {
  const [checkbox, setcheckbox] = useState(false);
  const [value, setvalue] = useState({
    id: "",
    nom: "",
    mail: "",
    pass: "",
    checkpass: "",
    username: "",
    dataS1 : ""
  });
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const [Errors, setErrors] = useState({});
  const emailChecker = (vl) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(vl);
  };
  const navigate = useNavigate("/login");
  
  const handleChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
      if(!value.mail && !value.pass && !value.username){
       console.log("Veulliez remplier les champs obligqtoire ")
  };
  };
  const handleOnBlur = (e) => {
    {value.pass && value.checkpass === value.pass  ?  "" : console.log("  Le mot de passe rensigner n'ai indentique !")} 
    return e ;
  };
  console.log(value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3306/custumers",
        {
          nom: value.nom || null,
          mail: value.mail,
          pass: value.pass,
          username: value.username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Reponse serveur : ", response.data);
      navigate("/login")
      setvalue((prev) => ({...prev , dataS1 : response.data}))
    } catch (error) {
      console.error("Erreur axios : ", error);
    }
  
  }
  return (
    <>
      <div style={{ justifyItems: "center" }}>
        <Nav />
      </div>
      <div className="allDivsigin">
        <div className="mainDivSigin">
          <form  action="" method="post" onSubmit={handleSubmit} className="senddata">
            <h2>S'inscrire</h2>
            <div className="TableInfos">
              <TextField
                label="username"
                name="username"
                value={value.username}
                onChange={handleChange}
              ></TextField>
              <TextField
                label="name"
                name="nom"
                value={value.nom}
                onChange={handleChange}
              ></TextField>
              <TextField
                onChange={handleChange}
                label="email"
                color="black"
                value={value.mail}
                name="mail"
                type="email"
              ></TextField>
              <TextField
                onChange={handleChange}
                id="pass1"
                type="password"
                label="new password"
                color="black"
                name="pass"
                value={value.pass}
              ></TextField>
              <TextField
                id="pass2 "
                type="password"
                label="confirm password"
                color="black"
                onChange={handleChange}
                name="checkpass"
                value={value.checkpass}
                onBlur={handleOnBlur}
              ></TextField>
              <input
                type="checkbox"
                value={checkbox}
              ></input>
              {input.email && <p>Merci de rentrer un mail valide !! </p>}
              J'accepte les conditions génerale de la plateforme
              <Button className="senddata" type="submit">
                Valider
              </Button>
            </div>

          </form>
          {value.dataS1 && <Alert severity="success">Bienvenue dans la team  ! </Alert> }
        </div>
      </div>
    </>
  );
}

export default Register;
