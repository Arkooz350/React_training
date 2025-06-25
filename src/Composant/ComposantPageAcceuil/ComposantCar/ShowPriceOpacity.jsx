import ComposantCitroenAccueil from "./ComposantCitroenAccueil";
import { car } from "../../Tableaux/ShowCar";
import { useState } from "react";

function ShowPriceOpacity({ sendDataAll }) {
  const [moveMouse, setmoveMouse] = useState(false);
  console.log(moveMouse)
  return (
    <div onMouseEnter={() => setmoveMouse(true)}
     onMouseLeave={() => setmoveMouse(false)}
        className={moveMouse ? "HoverTest" : "DivPriceModif"}>
      <p>{sendDataAll.price}</p>
    </div>
  );
}

export default ShowPriceOpacity;
