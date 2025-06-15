import "./main";
import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/Acceuil";
import Decouverte from "./Pages/Decouverte";
import './index.css'
import Ville_a_decouvrire from "./Pages/Ville_a_decouvrire";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ville_a_decouvrire" element ={<Ville_a_decouvrire/>} ></Route>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Decouverte" element={<Decouverte/>} />
        <Route path="/*" element='404' />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
