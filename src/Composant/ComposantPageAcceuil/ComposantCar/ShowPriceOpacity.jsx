import ComposantCitroenAccueil from "./ComposantCitroenAccueil";
import { useState } from "react";

function ShowPriceOpacity({ sendDataAll }) {
  const [moveMouse, setmoveMouse] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setmoveMouse(true)}
        onMouseLeave={() => setmoveMouse(false)}
        className={moveMouse ? "HoverTest" : "DivPriceModif"}
      >
        <p>{sendDataAll.price}</p>
      </div>
    </>
  );
}

export default ShowPriceOpacity;
