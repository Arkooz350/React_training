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
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./utils/AuthContext";
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/city" element={<City />}>
            <Route path="city/:name" element={<City />} />
          </Route>
          <Route path="/" element={<Acceuil />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element="404" />
          <Route path="/login" element={<LoginComposant />} />
          <Route path="/register" element={<Register></Register>} />
          <Route
            path="/dashbord"
            element={
              <>
                <PrivateRoute>
                  <Dashbord></Dashbord>
                </PrivateRoute>
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile />
              //{" "}
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
