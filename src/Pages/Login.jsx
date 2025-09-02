import React, { useEffect, useReducer, useState } from "react";
import Nav from "../Composant/Nav";
import "../Style/Login.css";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import Register from "./Register";
import axios from "axios";
import Dashbord from "./Dashbord";
import TaskReducer from "@/Composant/Tableaux/TasksReducer";
function LoginComposant() {
  const [tasksState, dispatch] = useReducer(TaskReducer, {
    inputemail: {},
    inputpass: {},
    action: false,
    saveresponse: {},
    error: {},
    errorpassWord: "",
  });

  const handleConnection = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:3306/login", {
        mail: tasksState.inputemail.email,
        pass: tasksState.inputpass.pass,
      })
      .then((res) =>
        dispatch({
          type: "saveres",
          playload: {
            saveresponse: res.data,
          },
        })
      )
      .then((err) => console.error(err));
  };
  const dataSaveremail = (event) => {
    dispatch({
      type: "Setemail",
      playload: {
        inputemail: {
          email: event.target.value.trim(),
        },
      },
    });
  };
  const dataSaverpass = (e) => {
    dispatch({
      type: "Setpass",
      playload: {
        inputpass: {
          pass: e.target.value.trim(),
        },
      },
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (tasksState.saveresponse.code >= 1) {
      navigate("/Dashbord");
    } else {
      console.log("password or email incorrect , please check this ! ");
    }
  }, [handleConnection, navigate]);

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
              onChange={dataSaveremail}
              value={tasksState.inputemail.email}
            />
            <label htmlFor="inputPassWord" /> Mot de passe :
            <input
              required
              id="inputPassWord"
              type="password"
              placeholder="Entrer votre mot de passe "
              onChange={dataSaverpass}
              value={tasksState.inputemail.pass}
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
        </div>
      </div>
    </>
  );
}

export default LoginComposant;
