import "./main";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/Acceuil";
import Search   from "./Pages/Search";
import "./Style/Acceuil.css";
import Ville_a_decouvrire from "./Pages/Ville_a_decouvrire";
import LoginComposant from "./Pages/Login";
import Register from "./Pages/Register.jsx";
import Dashbord from "./Pages/Dashbord";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/ville_a_decouvrire"
          element={<Ville_a_decouvrire />}
        ></Route>
        <Route path="/" element={<Acceuil />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element="404" />
        <Route path="/login" element={<LoginComposant />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
