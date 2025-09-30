import "./main";
import React, { lazy, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
} from "react-router-dom";
import Acceuil from "./Pages/Accueil";
import Search from "./Pages/Search";
import "./Style/Acceuil.css";
import City from "./Pages/City";
import LoginComposant from "./Pages/Login";
import Register from "./Pages/Register.jsx";
import Dashbord from "./Pages/Dashbord";
import Profile from "./Pages/PagesDashbord/Profile";
import IsAuth from "./utils/IsAuth";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/city" element={<City />}></Route>
        <Route path="/" element={<Acceuil />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element="404" />
        <Route path="/login" element={<LoginComposant />} />
        <Route path="/register" element={<Register></Register>} />
        <Route
          path="/dashbord"
          element={
            <>
              <IsAuth>
                <Dashbord></Dashbord>
              </IsAuth>
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <IsAuth>
              <Profile />
              //{" "}
            </IsAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
