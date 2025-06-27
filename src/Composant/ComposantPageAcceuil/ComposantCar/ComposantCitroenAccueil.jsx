import React, { createElement } from "react";
import Acceuil from "../../../Pages/Acceuil";
import { car } from "../../Tableaux/ShowCar";
import { useState  , memo } from "react";
import ShowPriceOpacity from "./ShowPriceOpacity";


export default function ComposantCitroenAccueil({ vehicle , SendDataToShowPrice }) {
    const [look, setLook] = useState(false);
    return (
        <div key={vehicle.id}   className={"Div" + vehicle.alt}>
            <img
                onMouseEnter={() => setLook(true)}
                onMouseLeave={() => setLook(false)}
                className={"img" + vehicle.alt}
                src={vehicle.src}
                alt={vehicle.alt}
                style={{
                    width: "500px",
                    height: "400px",
                    borderRadius: "50px",
                }}
            >
           </img>
            {look && (
                <div className="DivCarac">
                    <h3>{vehicle.carac}</h3>
                </div>
            )}
            <ShowPriceOpacity sendDataAll={vehicle}/>
          
          
        </div>
    );
}
