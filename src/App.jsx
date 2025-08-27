import "./main";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/Acceuil";
import Decouverte from "./Pages/Decouverte";
import "./Style/Acceuil.css";
import Ville_a_decouvrire from "./Pages/Ville_a_decouvrire";
import LoginComposant from "./Pages/Login";
import Register from "./Pages/Register.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/ville_a_decouvrire"
          element={<Ville_a_decouvrire />}
        ></Route>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Decouverte" element={<Decouverte />} />
        <Route path="/*" element="404" />
        <Route path="/login" element={<LoginComposant />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
