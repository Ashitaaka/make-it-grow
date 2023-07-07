import React, { createContext, useContext, useState } from "react";

  const UserContext = createContext();

  export const useUser = () => useContext(UserContext);

  const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState({ 
        id : "",
        firstname: "",
        lastname: "",
        id_role: "",
        id_location: "",
        picture: "",
        auth: false, 
    });

    const login = (id, firstname, lastname, id_role, id_location, picture) => {
      setUser((user) => ({
        id : id,
        firstname: firstname,
        lastname : lastname,
        id_role : id_role,
        id_location : id_location,
        picture : picture,
        auth: true,
      }));
    };

    const logout = () => {
      setUser((user) => ({
        id : "",
        firstname: "",
        lastname: "",
        id_role: "",
        id_location: "",
        picture: "",
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
