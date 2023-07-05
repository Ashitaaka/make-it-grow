import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import components
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import TopBar from "./components/top bar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useUser } from "./hooks/UserContext"
import tokenStorage from "./hooks/useToken";
//import css
import "./App.css";


function App() {

  //import the UserContext 
  // const { user } = useUser();
  const { removeToken, setToken, token } = tokenStorage();
  
  console.log(token);
 
  //Which button is active?
  const [clickedButton, setClickedButton] = useState("");


    return !token
    ? (
      <Routes>
        <Route path="*" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    )
    :(
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
            <Route path="*" element={<Navigate to="/dashboard"/>} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/profile/:userid" element={<ProfileDetails />} />
          </Routes>
        </div>
      </div>
    );
}

export default App;
