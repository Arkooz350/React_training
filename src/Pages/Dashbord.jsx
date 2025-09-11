import { useEffect, useMemo, useState } from "react";
import LoginComposant from "./Login";
import DisconnectBtn from "@/Composant/ComposantDashbord/DisconnectBtn";
import axios from "axios";
import { NavLink, useNavigate } from "react-router";
import { HomeIcon } from "lucide-react";

function Dashbord() {



  return (
    <>
    <HomeIcon fontSize="large" href="/" >

    </HomeIcon>
      <DisconnectBtn ></DisconnectBtn>
    </>
  );
}

export default Dashbord;
