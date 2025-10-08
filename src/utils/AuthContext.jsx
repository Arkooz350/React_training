import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    VerifyToken();
  }, []);
  const VerifyToken = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      setloading(false);
      return;
    }
    try {
      const response = await axios.get(
        "http://localhost:3306/api/auth/verify",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setuser(response.data.user);
    } catch (error) {
      console.error(" Token Invalid ", error);
      localStorage.removeItem("token");
      setuser(null);
    } finally {
      setloading(false);
    }
  };
  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setuser(userData);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setuser(null);
  };
  return (
    <AuthContext.Provider value={{ user, loading, login, logout, VerifyToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext doit être utilisé dans AuthProvider");
  }
  return context;
};
