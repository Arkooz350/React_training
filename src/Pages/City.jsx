import React from "react";
import Nav from "../Composant/Nav";
import { useState } from "react";
import "../Style/Afficher.css";
import { villeinfos } from "@/Composant/Tableaux/TableauxVille";
import { useNavigate } from "react-router-dom";
import { CircleChevronDown } from "lucide-react";
import FirstElement from "@/Composant/PageCity/FirstElement";

function Ville_a_decouvrire() {
  return (
    <>
      <div>
        <FirstElement></FirstElement>
      </div>
    </>
  );
}

export default Ville_a_decouvrire;
