import { Button } from "@mui/material";
import Dashbord from "@/Pages/Dashbord";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function DisconnectBtn({}) {
  axios.defaults.withCredentials = true;
  const [userDisconnect, setuserDisconnect] = useState(false);
  const navigate = useNavigate();

  const handleDisconnect = (event, id) => {
    event.preventDefault();
    axios
      .post("http://localhost:3306/api/auth/logout", {
        id: id,
      })
      .then((response) => {
        setuserDisconnect(response.data.success);
      });

    if (userDisconnect === true || event.target)
      return navigate("/login").catch((err) => console.error(err));
  };
  return (
    <>
      <Button
        onClick={handleDisconnect}
        type="submit"
        variant="outlined"
        color="error"
      >
        Se déconnecter
      </Button>
    </>
  );
}

export default DisconnectBtn;
