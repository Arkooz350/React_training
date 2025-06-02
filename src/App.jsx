import "./main";
import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/Acceuil";
import Decouverte from "./Pages/Decouverte";
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Decouverte" element={<Decouverte/>} />
        <Route path="/*" element='404' />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
