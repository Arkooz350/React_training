import "../Style/register.css";
import Nav from "../Composant/Nav";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { useEffect, useReducer, useRef, useState } from "react";
import { data, useNavigate } from "react-router";
import ReducerRegister from "@/Composant/Tableaux/ReducerRegister";
import axios from "axios";

function Register() {
  const [taskState, dispatchAction] = useReducer(ReducerRegister, {
    userdata: {},
    dataServeur: {},
    isLoading: false,
    BtnSubmit: false,
  });
  const [userdata, setuserdata] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const regex = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex(emailRegex.test);
  };
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    dispatchAction(
      {
        type: "userdata",
        playload: {
          userdata: {
            ...data,
            [name]: e.value,
          },
        },
      },
      console.log(taskState.userdata)
    );
    return data;
  };
  const verifyEmail = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3306/api/auth/register/verify-email", {
        mail: data.mail,
      })
      .then((res) => console.log(res.data.success));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      axios
        .post("http://localhost:3306/api/auth/register", {
          nom: taskState.userdata.dataClients.nom,
          mail: taskState.userdata.dataClients.mail,
          pass: taskState.userdata.dataClients.pass,
          username: taskState.userdata.dataClients.username,
        })
        .then((res) => setuserdata(res.data.success));
      setTimeout(() => {
        navigate(
          "/login",
          <div className="AlertPopup">
            <Alert severity="info">This is an info Alert.</Alert>
          </div>
        );
      }, 2500);
    } catch (error) {
      console.error(error);
      {
        error && <p>Merci de renseigner les champs</p>;
      }
    } finally {
      console.log("Chargement . . .");
    }
  }
  return (
    <>
      <div style={{ justifyItems: "center" }}>
        <Nav />
      </div>
      <div className="allDivsigin">
        <div className="mainDivSigin">
          <form method="post" onSubmit={handleSubmit} className="senddata">
            <h2>S'inscrire</h2>
            <div className="TableInfos">
              <TextField
                label="username"
                name="username"
                value={data.username}
                onChange={handleChange}
                required={true}
              ></TextField>
              <TextField
                label="name"
                name="nom"
                value={data.nom}
                onChange={handleChange}
                required={true}
              ></TextField>
              <TextField
                onBlur={verifyEmail}
                onChange={handleChange}
                label="email"
                color="black"
                value={data.mail}
                name="mail"
                type="email"
                required={true}
              ></TextField>
              <TextField
                onChange={handleChange}
                id="pass1"
                type="password"
                label="new password"
                color="black"
                name="pass"
                required={true}
                value={data.pass}
              ></TextField>
              <TextField
                id="pass2"
                type="password"
                label="confirm password"
                color="black"
                onChange={handleChange}
                name="passCheck"
                value={taskState.passCheck}
              ></TextField>
              <input type="checkbox" value={true}></input>
              {taskState.userdata.mail && (
                <p>Merci de rentrer un mail valide !! </p>
              )}
              J'accepte les conditions génerale de la plateforme
              <Button className="senddata" type="submit" disabled={true}>
                Valider
              </Button>
            </div>
          </form>
          {/* {value.dataS1 && (
            <Alert severity="success">Bienvenue dans la team ! </Alert> */}
          {/* )} */}
        </div>
      </div>
    </>
  );
}
export default Register;
