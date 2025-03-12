import React, { createContext, useState, useContext } from "react";

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);
