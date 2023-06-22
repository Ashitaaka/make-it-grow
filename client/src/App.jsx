import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//import components
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import TopBar from "./components/top bar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
//import css
import "./App.css";

function App() {
  //Is the user logged in?
  const [token, setToken] = useState();
  console.log(token)

  //Which button is active?
  const [clickedButton, setClickedButton] = useState("");

if (!token){
    return (
      <Routes>
        <Route path="/" element={<Login setToken={setToken}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  };
  
    return (
      <div className="app">
        <Sidebar
          clickedButton={clickedButton}
          setClickedButton={setClickedButton}
        />
        <div className="app_container">
          <TopBar
            clickedButton={clickedButton}
            setClickedButton={setClickedButton}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:userid" element={<ProfileDetails />} />
          </Routes>
        </div>
      </div>
    );
}

export default App;
