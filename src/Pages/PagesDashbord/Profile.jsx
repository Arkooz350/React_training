import LinksDashBord from "../../Composant/ComposantDashbord/LinksTodashbord";
import DisconnectBtn from "../../Composant/ComposantDashbord/DisconnectBtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import IsAuth from "@/Composant/IsAuth";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const [input, setinput] = useState({});

  LinksDashBord({ mail: input });

  return (
    <>
      <div className="flex justify-center">
        <h1 className="inline-flex bg-red-700 text-4xl text-white font-bold  justify-center justify-items-center">
          Profile
        </h1>
      </div>
      <div className="flex justify-center gap-10 m-4">
        <LinksDashBord />
        <DisconnectBtn></DisconnectBtn>
        <FirstPageIcon
          fontSize="large"
          className="cursor-pointer hover:transform hover:scale-110 transition-transform"
          onClick={() => navigate("/dashbord")}
        ></FirstPageIcon>
      </div>
      <div className="inline-grid m-4 p-8 gap-4 justify-items-center">
        <h3 id="profile" className="text-2xl font-bold bg-red-700 p-4 rounded">
          Bienvenue sur votre profil
        </h3>
        <input
          onInput={(e) => setinput(e.target.value)}
          placeholder="Entrer votre email 
          "
          className="bg-black flex border-2 "
        ></input>
        <span htmlFor="profile" className="text-lg relative ">
          Voici vos informations personnelles :
        </span>
        <ul className="list-disc list-inside text-md m-4 p-4 border border-gray-300 rounded shadow-sm">
          <li></li>
          <li>Prénom : Jean</li>
          <li>Email : dupont.jean@example.com</li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
