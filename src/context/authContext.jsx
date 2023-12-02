import React, { useState, createContext } from "react";
const AuthenticationAPI = createContext();

export const AuthenticationContext = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    birthday: "",
  });

  return (
    <AuthenticationAPI.Provider value={{ isLogin, setIsLogin, user, setUser }}>{children}</AuthenticationAPI.Provider>
  );
};

export default AuthenticationAPI;
