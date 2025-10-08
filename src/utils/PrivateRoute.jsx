import { useAuth } from "@/hooks/useAuth";
import Dashbord from "@/Pages/Dashbord";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuthificate, isLoading, user } = useAuth();
  console.log(localStorage.getItem("token"));
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Chargement...</div>
      </div>
    );
  }

  return isAuthificate ? (
    <Navigate to="/dashbord"></Navigate>
  ) : (
    <Navigate to="/login" replace></Navigate>
  );
}

export default PrivateRoute;
