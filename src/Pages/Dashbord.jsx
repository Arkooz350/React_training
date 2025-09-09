import { useEffect, useMemo, useState } from "react";
import LoginComposant from "./Login";
import DisconnectBtn from "@/Composant/ComposantDashbord/DisconnectBtn";
import axios from "axios";
import { useNavigate } from "react-router";

function Dashbord({}) {
  // localStorage.removeItem()
  console.log(data)
  return (
    <>
      <DisconnectBtn ></DisconnectBtn>
    </>
  );
}

export default Dashbord;
