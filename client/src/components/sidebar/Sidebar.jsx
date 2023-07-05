import React, { useState } from "react";

//import assets
import homeIcon from "../../assets/icons/home_icone.svg";
import profileIcon from "../../assets/icons/profile_icone.svg";
import addProjectIcon from "../../assets/icons/new_project_icone.svg";
import filterIcon from "../../assets/icons/filter-icon.svg";

//import css
import "./sidebar.css";
import ToggleButton from "../toggle button/ToggleButton";
import { Link } from "react-router-dom";



const Sidebar = ({ clickedButton , setClickedButton }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      {/* to fake sidebar space (because it is in fixed position) */}
      <div className="sidebar_space"></div>

      {/* sidebar */}
      <div className="sidebar_desktop">
        {/* Top buttons*/}
        <div className="sidebar_desktop_menu_buttons">
          <div className={clickedButton === "home" ? "button_container active_button": "button_container"}>
            <Link 
              to={"/dashboard"} 
              className="sidebar_desktop_button"
              onClick={() => setClickedButton("home")}
            >
              <img className="sidebar_desktop_icon" src={homeIcon} alt="Home" />
              <span>Home</span>
            </Link>
          </div>

          <div className={clickedButton === "profile" ? "button_container active_button": "button_container"}>
            <Link 
              to={"/profile"} 
              className="sidebar_desktop_button"
              onClick={() => setClickedButton("profile")}
            >
              <img
                className="sidebar_desktop_icon"
                src={profileIcon}
                alt="Profile"
              />
              <span>Profile</span>
            </Link>
          </div>

          <hr className="separator" />

          <div className={clickedButton === "new-idea" ? "new_project_button_container active_button" :"new_project_button_container"}>
            <Link
              to="/newIdea" 
              className="sidebar_desktop_button"
              onClick={()=>setClickedButton("new-idea")}
            >
              <img
                className="sidebar_desktop_icon"
                src={addProjectIcon}
                alt="Nouvelle idée"
              />
              <span className="new_project_txt">Ajouter une idée</span>
            </Link>
          </div>
        </div>

        {/* Bottom buttons*/}
        <div className="config_buttons">
          <hr className="separator" />

          <div className={clickedButton === "filter" ? "button_container active_button": "button_container"}>
            <Link 
              to="#" 
              className="sidebar_desktop_button"
              onClick={() => setClickedButton("filter")}
            >
              <img
                className="sidebar_desktop_icon"
                src={filterIcon}
                alt="filtres"
              />
              <span>Filtres</span>
            </Link>
          </div>

          <div className="toggle_button_container">
            <ToggleButton
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
            <p className="dark-mode-txt">
              {isDarkMode ? "Dark mode" : "Light mode"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
