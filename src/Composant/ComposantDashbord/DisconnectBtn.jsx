import { Button } from "@mui/material";
import Dashbord from "@/Pages/Dashbord";

function DisconnectBtn({resData}) {
const handleClear = async (e) => {
}
    return ( 
        <>
        <Button onClick={resData && handleClear}   type="submit" variant="outlined">Se déconnecter</Button>
        </>
     );
}

export default DisconnectBtn;