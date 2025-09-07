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
    const navigate = useNavigate();
  const [data, setData] = useState({});
  const [userdata, setuserdata] = useState({});
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    dispatchAction({
      type: "userdata",
      playload: {
        userdata: {
          dataClients: {
            username: data.username,
            nom: data.nom,
            mail: data.mail,
            pass: data.pass,
            passCheck: data.passCheck,
          },
        },
      },
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      axios.defaults.withCredentials = true
      axios.post("http://localhost:3306/api/auth/register",{
        nom: taskState.userdata.dataClients.nom,
        mail : taskState.userdata.dataClients.mail,
        pass : taskState.userdata.dataClients.pass,
        username : taskState.userdata.dataClients.username
      })
      .then((res) => setuserdata(res.data.success))
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
  console.log(taskState.userdata.dataClients);
  console.log(data)

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
                value={taskState.username}
                onChange={handleChange}
                required={true}
              ></TextField>
              <TextField
                label="name"
                name="nom"
                value={taskState.nom}
                onChange={handleChange}
                required={true}
              ></TextField>
              <TextField
                onChange={handleChange}
                label="email"
                color="black"
                value={taskState.mail}
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
                value={taskState.pass}
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
              <Button className="senddata" type="submit" disabled={false}>
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
