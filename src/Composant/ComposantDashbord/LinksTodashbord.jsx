import { Button } from "@/components/ui/button";
import DisconnectBtn from "./DisconnectBtn";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function LinksDashBord(mail) {
  const ConnectionProfile = () => {
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3306/api/auth/profile", {
        mail: mail,
      })
      .then((res) => console.log(res.data[0]));
  };
  return (
    <>
      <Link to="/abonnements">
        <Button variant="link">Abonnements</Button>
      </Link>
      <Link to="/reservations">
        <Button variant="link">Gérer mes réservation</Button>
      </Link>
      <Link onClick={ConnectionProfile} to="/profile">
        <Button variant="link">Profil</Button>
      </Link>
      <Link to="/aide">
        <Button variant="link">Aide </Button>
      </Link>
    </>
  );
}

export default LinksDashBord;
