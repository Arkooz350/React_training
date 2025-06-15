import React from "react";
import image_tower from "../assets/effeil_tower.jpeg";
import image_parc from "../assets/parc.jpeg";
import image_nice from "../assets/nice.jpeg";
import image_plage from "../assets/plage.jpeg";
import image_rennes from "../assets/rennes.jpeg";
import Nav from "../Composant/Nav";
import Button_tower from "../Composant/ButtonComposant/Button_Tower"

const Ville_a_decouvrire = () => {
  return (
    <div className="mainDiv">
      <Nav />
      <div className="SousMenu" style={{display:"block", background:'#f5cb5c', marginTop:"5em" , borderRadius:"15px" , justifyItems:"center"}}>
      <div className="imgDiv" style={{display:"flex", gap :"2em", marginTop:"5em", justifyContent:"center"}}>
         <form>
        <img
          src={image_tower}
          alt="effeil-tower"
          style={{ height: "100px", width: "100px"  , borderRadius:"40px"}}
        
        />
        <Button_tower/>
        </form>
        <form action="">
        <img
          src={image_parc}
          alt="parc"
          style={{ height: "100px", width: "100px"   ,borderRadius:"40px"}}
        />
        <Button_tower/>
        </form>
        <form action="">
        <img
          src={image_plage}
          alt="plage"
          style={{ height: "100px", width: "100px"  ,  borderRadius:"40px"}}
        />
        <Button_tower/>
        </form>
        <form action="">
        <img
          src={image_nice}
          alt="Nice"
          style={{ height: "100px", width: "100px"  ,  borderRadius:"40px"}}
        />
        <Button_tower/>
        </form>
        <form action="">
        <img
          src={image_rennes}
          alt="rennes"
          style={{ height: "100px", width: "100px"  ,  borderRadius:"40px"}}
        />
        <Button_tower/>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Ville_a_decouvrire;
