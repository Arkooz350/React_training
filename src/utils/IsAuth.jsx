import Dashbord from "@/Pages/Dashbord";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { redirect } from "react-router";
import { useEffect, useState } from "react";

const IsAuth = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
export default IsAuth;
