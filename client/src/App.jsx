import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
//import components
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import TopBar from "./components/top bar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useUser } from "./hooks/UserContext";
import tokenStorage from "./hooks/useToken";
import CreateIdea from "./components/ideas/createIdea/CreateIdea";
import IdeaExtended from "./components/ideas/ideaExtended/IdeaExtended";
//import css
import "./App.css";

axios.defaults.baseURL = "/api";

function App() {
  const { removeToken, setToken, token } = tokenStorage();

  //Which button is active?
  const [clickedButton, setClickedButton] = useState("");

  return !token ? (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  ) : (
    <div className="app">
      <Sidebar
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <div className="app_container">
        <TopBar
          clickedButton={clickedButton}
          setClickedButton={setClickedButton}
          removeToken={removeToken}
          token={token}
        />
        <Routes>
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/profile/:userid" element={<ProfileDetails />} />
          <Route path="/newidea" element={<CreateIdea />} />
          <Route path="/idea/:id" element={<IdeaExtended />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
