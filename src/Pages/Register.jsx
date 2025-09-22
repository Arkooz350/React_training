import "../Style/register.css";
import Nav from "../Composant/Nav";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { useEffect, useReducer, useRef, useState } from "react";
import { data, useNavigate } from "react-router";
import ReducerRegister from "@/Composant/Tableaux/ReducerRegister";
import axios from "axios";
import { useForm } from "react-hook-form";
import ButtonCustumRegister from "@/components/ui/ButtonCustumRegister.jsx";
function Register({ dataForm }) {
  const [taskState, dispatchAction] = useReducer(ReducerRegister, {
    userdata: {},
    dataServeur: {},
    isLoading: false,
    BtnSubmit: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userdata, setuserdata] = useState({});
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const VerifyEmail = () => {
    axios.defaults.withCredentials = true;
    const response1 = axios
      .post("http://localhost:3306/api/auth/register/verify-email", {
        mail: dataForm.email,
      })
      .then((response) => console.log(response));
    console.log(response1);
  };

  return (
    <>
      <div style={{ justifyItems: "center" }}>
        <Nav />
      </div>
      <div className="allDivsigin">
        <div className="mainDivSigin">
          <h2 className=" font-extrabold text-2xl uppercase hover:underline">
            S'inscrire
          </h2>
          <div className="TableInfos">
            <ButtonCustumRegister
              verifyEmail={VerifyEmail}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
