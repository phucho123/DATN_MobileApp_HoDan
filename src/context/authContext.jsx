import React, { useState, createContext } from "react";
const AuthenticationAPI = createContext();

export const AuthenticationContext = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  return (
    <AuthenticationAPI.Provider value={{ isLogin, setIsLogin, user, setUser }}>{children}</AuthenticationAPI.Provider>
  );
};

export default AuthenticationAPI;
