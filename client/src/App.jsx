import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
//import components
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import TopBar from "./components/topBar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import tokenStorage from "./hooks/useToken";
import CreateIdea from "./components/ideas/createIdea/CreateIdea";
import IdeaExtended from "./components/ideas/ideaExtended/IdeaExtended";
import MenuBurger from "./components/menuBurger/MenuBurger";
import NotAuthorized from "./components/notAuthorized/NotAuthorized";
//import css

import "./App.css";
import Admin from "./pages/admin/Admin";

axios.defaults.baseURL = "/api";

function App() {
  //Getting user infos
  const { removeToken, setToken, token } = tokenStorage();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (token.id_role === 2) {
      setIsAdmin(true);
    }
  }, []);

  //is Menu Burger opened?
  const [isMenuBurger, setIsMenuBurger] = useState(false);

  //Show/hide Menu Burger
  const showHideMenuBurger = (e) => {
    e.stopPropagation();
    setIsMenuBurger(!isMenuBurger);
  };

  console.log(token);

  return !token ? (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  ) : (
    <div className="app">
      <MenuBurger
        removeToken={removeToken}
        token={token}
        isMenuBurger={isMenuBurger}
        setIsMenuBurger={setIsMenuBurger}
        showHideMenuBurger={showHideMenuBurger}
      />
      <Sidebar token={token} />
      <div className="app_container">
        <TopBar
          removeToken={removeToken}
          token={token}
          isMenuBurger={isMenuBurger}
          setIsMenuBurger={setIsMenuBurger}
          showHideMenuBurger={showHideMenuBurger}
        />
        <Routes>
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/profile/:userid" element={<ProfileDetails />} />
          <Route path="/newidea" element={<CreateIdea token={token} />} />
          <Route path="/idea/:id" element={<IdeaExtended />} />
          <Route
            path="/admin"
            element={isAdmin ? <Admin /> : <NotAuthorized />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
