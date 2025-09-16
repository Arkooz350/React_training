import "./main";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/Accueil";
import Search from "./Pages/Search";
import "./Style/Acceuil.css";
import City from "./Pages/City";
import LoginComposant from "./Pages/Login";
import Register from "./Pages/Register.jsx";
import Dashboard from "./Pages/Dashbord";
import Profile from "./Pages/PagesDashbord/Profile";
import IsAuth from "./Composant/isAuth";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/City" element={<City />}></Route>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/" element={<Acceuil />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element="404" />
        <Route path="/login" element={<LoginComposant />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbord" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
