import { useEffect, useMemo, useState } from "react";
import LoginComposant from "./Login";
import DisconnectBtn from "@/Composant/ComposantDashbord/DisconnectBtn";
import axios from "axios";
import { NavLink, useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@/components/ui/button";
import LinksDashBord from "@/Composant/ComposantDashbord/LinksTodashbord";
import IsAuth from "@/utils/IsAuth";
import IconAcc from "@/Composant/ComposantPageAcceuil/IconAcc";

function Dashbord({ data }) {
  const [click, setclick] = useState(false);

  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e) {
      setclick((t) => !t);
    }
    console.log(click);
  };
  IsAuth;
  return (
    <>
      <div className="flex justify-center">
        <h1 className="bg-red-700 text-4xl text-white font-bold justify-content ">
          Dashboard , {}
        </h1>
      </div>
      <div className="flex justify-center gap-10 m-4">
        <LinksDashBord></LinksDashBord>
        <DisconnectBtn></DisconnectBtn>
      </div>
      <div className="flex justify-right gap-10 m-4">
        <MenuIcon
          onClick={handleClick}
          className="text-shadow-neutral-500 flex justify-center cursor-pointer"
          fontSize="large"
          href="/"
        />
      </div>
    </>
  );
}

export default Dashbord;
