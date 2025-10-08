import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthificate, setisAuthificate] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [user, setuser] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);
  const checkAuth = () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const tokenData = parseJwt(token);
        const currentTime = tokenData.exp * 1000 < Date.now();
        if (currentTime) {
          logout();
          return;
        }
      } else {
        setisAuthificate(false);
      }
    } catch (error) {
      setisAuthificate(false);
    } finally {
      setisLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setuser(null);
  };
  return {
    isAuthificate,
    isLoading,
    user,
  };
};

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    return null;
  }
};
