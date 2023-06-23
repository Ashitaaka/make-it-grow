import React, { createContext, useContext, useState } from "react";

  const UserContext = createContext();

  export const useUser = () => useContext(UserContext);

  const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState({ firstname: "", auth: false });

    const login = (name) => {
      setUser((user) => ({
        firstname: name,
        auth: true,
      }));
    };

    const logout = () => {
      setUser((user) => ({
        firstname: "",
        auth: false,
      }));
    };

    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  };

export default UserProvider;
