import { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import components
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import TopBar from "./components/top bar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import useToken from "./hooks/useToken";
import { useUser } from "./hooks/UserContext"
//import css
import "./App.css";


function App() {

  const { user } = useUser();
  // console.log(useUser());

  //Is the user logged in?
  // const {token , setToken} = useToken();

  //Which button is active?
  const [clickedButton, setClickedButton] = useState("");


    return !user.auth
    ? (
      <Routes>
        <Route path="*" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login />} />
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
          />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard"/>} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/profile/:userid" element={<ProfileDetails />} />
          </Routes>
        </div>
      </div>
    );
}

export default App;
