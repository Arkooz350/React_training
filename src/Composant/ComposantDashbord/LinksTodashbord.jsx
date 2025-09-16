
import { Button } from "@/components/ui/button";
import DisconnectBtn from "./DisconnectBtn";
import {Link} from "react-router-dom"

function LinksDashBord({DisconnectBTN}) {
    return ( 
        <>
        <Link to="/abonnements">
          <Button variant="link">Abonnements</Button>
        </Link>
        <Link to="/reservations">
          <Button variant="link">Gérer  mes réservation</Button>
        </Link>
        <Link to="/profile/:id">
          <Button variant="link">Profil</Button>
        </Link>
        <Link to="/aide">
          <Button variant="link">Aide </Button>
        </Link>

        </>
     );
}

export default LinksDashBord;