import "../Style/register.css";
import Nav from "../Composant/Nav";
import { useMemo, useReducer } from "react";
import { useNavigate } from "react-router";
import ReducerRegister from "@/Composant/Tableaux/ReducerRegister";
import axios from "axios";
import ButtonCustumRegister from "@/components/ui/ButtonCustumRegister.jsx";

function Register() {
  const [taskState, dispatchAction] = useReducer(ReducerRegister, {
    userdata: {},
    dataServeur: {},
    isLoading: false,
    BtnSubmit: false,
  });
  const navigate = useNavigate();

  const ConnectionRegister = async (formdata) => {
    try {
      axios.defaults.withCredentials = true;
      const response = axios.post("http://localhost:3306/api/auth/register", {
        nom: formdata.nom,
        mail: formdata.email,
        pass: formdata.pass,
        username: formdata.username,
      });

      response.then((res) => {
        // OnRecieve({ responseAPI: res.data });
        setTimeout(() => {
          navigate("/dashbord");
        }, 3500);
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useMemo(() => {
    ButtonCustumRegister;
  }, []);

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
            <ButtonCustumRegister onConnection={ConnectionRegister} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
