import React, { useEffect, useMemo, useReducer, useState } from "react";
import Nav from "../Composant/Nav";
import "../Style/Login.css";
import Button from "@mui/material/Button";
import { Navigate, NavLink, useNavigate, Route } from "react-router-dom";
import axios from "axios";
import TaskReducer from "@/Composant/Tableaux/TasksReducer";
import IsAuth from "@/utils/IsAuth";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import { DataStatusLogin } from "@/utils/ContextLogin.jsx";
import { useContext } from "react";
import { DataContextProvider } from "@/utils/ContextLogin.jsx";

function LoginComposant() {
  const valueContext = useContext(DataStatusLogin);
  const [tasksState, dispatch] = useReducer(TaskReducer, {
    action: false,
    saveresponse: {},
    error: {},
  });
  IsAuth;
  const [dataStatus, setdataStatus] = useState({});
  const navigate = useNavigate();
  const [datauser, setdataUser] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    const pressdata = { ...datauser, [name]: value };
    setdataUser({
      ...datauser,
      [name]: value,
    });
    console.log(pressdata);
    console.log(datauser.mail);
  };

  const handleConnection = async (e) => {
    axios.defaults.withCredentials = true;
    e.preventDefault();
    axios
      .post("http://localhost:3306/api/auth/login", {
        mail: datauser.mail,
        pass: datauser.pass,
      })
      .then((response) => {
        setdataStatus(response);
        if (response.status === 200) {
          navigate("/dashbord");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div style={{ justifyItems: "center" }}>
        <Nav />
      </div>

      <div className="FirstBlockDiv">
        <h2>Se connecter</h2>

        <div className="FormularForLogin">
          <label htmlFor="inputMail" /> Adresse-mail :
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              required
              id="inputMail"
              type="email"
              placeholder="Entrer votre adresse-mail"
              onChange={handleChange}
              value={datauser.mail}
              name="mail"
            />
            <label htmlFor="inputPassWord" /> Mot de passe :
            <input
              required
              id="inputPassWord"
              name="pass"
              type="password"
              placeholder="Entrer votre mot de passe "
              onChange={handleChange}
              value={datauser.pass}
              aria-label="password"
            />
            <br></br>
            <Button
              onClick={handleConnection}
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
          <br />
          <NavLink to="/register">S'inscrire</NavLink>
          <DataContextProvider children={dataStatus} />
        </div>
      </div>
    </>
  );
}

export default LoginComposant;
