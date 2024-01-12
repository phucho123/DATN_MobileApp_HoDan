import React, { useState, createContext } from "react";
const AuthenticationAPI = createContext();

export const AuthenticationContext = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [deviceID, setDeviceID] = useState(0);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    birthday: "",
  });

  return (
    <AuthenticationAPI.Provider value={{ isLogin, setIsLogin, user, setUser, deviceID, setDeviceID }}>
      {children}
    </AuthenticationAPI.Provider>
  );
};

export default AuthenticationAPI;
