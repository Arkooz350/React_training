import React, { useEffect, useMemo, useReducer, useState } from "react";
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
    savedataTodashbord: {},
  });
  const ShowTogglePassword = () => setShowPassword(!showPassword);
  const [datatodashbord, setdatatodashbord] = useState({});
  const navigate = useNavigate();

  const dataSaveremail = (event) => {
    dispatch({
      type: "Setemail",
      playload: {
        inputemail: {
          mail: event.target.value.trim(),
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

  const handleConnection = async (e) => {
    axios.defaults.withCredentials = true;

    e.preventDefault();
    axios
      .post("http://localhost:3306/api/auth/login", {
        mail: tasksState.inputemail.mail,
        pass: tasksState.inputpass.pass,
        pass: tasksState.inputpass.pass,
      })
      .then((res) => {
        setdatatodashbord(res.data);
        if (res.data.success == true) {
          return navigate("/dashbord");
         
        }
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    const Apidash = async () => {
      axios.defaults.withCredentials = true;
      axios.post("http://localhost:3306/api/auth/dashbord", {
        donnes: datatodashbord,
      });
       Apidash();
    };
    
  
  }, []);

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
              value={tasksState.inputemail.mail}
            />
            <label htmlFor="inputPassWord" /> Mot de passe :
            <input
              required
              id="inputPassWord"
              type="password"
              placeholder="Entrer votre mot de passe "
              onChange={dataSaverpass}
              value={tasksState.inputemail.pass}
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
        </div>
      </div>
    </>
  );
}

export default LoginComposant;
