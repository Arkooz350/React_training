import Dashbord from "@/Pages/Dashbord";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { redirect } from "react-router";

const IsAuth = ({ success, children, ...rest }) => {
  const isAuthificate = !!success;
  return isAuthificate ? children : <Navigate to="/login"></Navigate>;

  return (
    <>
      <Dashbord></Dashbord>
    </>
  );
};
export default IsAuth;
