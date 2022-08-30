import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  const handleAuth = () => {
    setIsAuth(prevVal => !prevVal);
  };

  const value = {
    isAuth,
    handleAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
