import { useEffect, useMemo, useState } from "react";
import LoginComposant from "./Login";
import DisconnectBtn from "@/Composant/ComposantDashbord/DisconnectBtn";
import { Loader2Icon } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router";

function Dashbord({ message }) {
  const navigate = useNavigate();
  const [user, setuser] = useState(false);
  axios.defaults.withCredentials = true
  useEffect(() => {
    
      axios
        .post("http://localhost:3306/dashbord",{
          test : "Phase de test"
        })
        .then((res) => console.log(res))
        .then((err) => console.error(err));
  }, [user]);
  
  return (
    <>
      <DisconnectBtn></DisconnectBtn>
    </>
  );
}

export default Dashbord;
