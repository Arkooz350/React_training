import { useEffect, useMemo, useState } from "react";
import LoginComposant from "./Login";
import DisconnectBtn from "@/Composant/ComposantDashbord/DisconnectBtn";
import axios from "axios";
import { Await, NavLink, useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@/components/ui/button";
import LinksDashBord from "@/Composant/ComposantDashbord/LinksTodashbord";
import IsAuth from "@/utils/PrivateRoute";
import IconAcc from "@/Composant/ComposantPageAcceuil/IconAcc";
import UseToggle from "@/hooks/UseToggle";
import NavbarCustum from "@/Composant/ComposantDashbord/Navbar";
import PrivateRoute from "@/utils/PrivateRoute";

function Dashbord() {
  const navigate = useNavigate();
  const { state, toggle } = UseToggle();

  return (
    <>
      <PrivateRoute>
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
            onClick={toggle}
            className="text-shadow-neutral-500 flex justify-center cursor-pointer"
            fontSize="large"
            href="/"
          />
          <div className="flex">
            <NavbarCustum isOpen={state} setIsOpen={toggle} />
          </div>
        </div>
      </PrivateRoute>
    </>
  );
}

export default Dashbord;
