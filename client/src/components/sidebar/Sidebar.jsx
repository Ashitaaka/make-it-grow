import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

//import assets
import homeIcon from "../../assets/icons/home_icone.svg";
import homeIconDark from "../../assets/icons/home_icone_dark.svg";
import profileIcon from "../../assets/icons/profile_icone.svg";
import profileIconDark from "../../assets/icons/profile_icone_dark.svg";
import addProjectIcon from "../../assets/icons/new_project_icone.svg";
import addProjectIconDark from "../../assets/icons/new_project_icone_dark.svg";
import filterIcon from "../../assets/icons/filter-icon.svg";
import filterIconDark from "../../assets/icons/filter-icon_dark.svg";
import ToggleButton from "../toggleButton/ToggleButton";
import  {useTheme}  from '../../utils/context/ThemeContext'

//import css
import "./sidebar.css";

const Sidebar = ({ token }) => {
  //To know what's the actual color Theme ('dark' or 'light' mode)
  const { theme } = useTheme();

  //To know what's the current URL
  const location = useLocation().pathname;

  return (
    <>
      {/* to fake sidebar space (because it is in fixed position) */}
      <div className="sidebar_space"></div>
      

      {/* sidebar */}
      <div className="sidebar_desktop">
        {/* Top buttons*/}
        <div className="sidebar_desktop_menu_buttons">
          <div
            className={
              location.includes("dashboard")
                ? "button_container active_button"
                : "button_container"
            }
          >
            <Link to={"/dashboard"} className="sidebar_desktop_button">
              <img 
                className="sidebar_desktop_icon" 
                src={theme === "light" ? homeIcon : homeIconDark} 
                alt="Home"
              />
              <span>Home</span>
            </Link>
          </div>

          <div
            className={
              location.includes("profile")
                ? "button_container active_button"
                : "button_container"
            }
          >
            <Link
              to={`/profile/${token.id}`}
              className="sidebar_desktop_button"
            >
              <img
                className="sidebar_desktop_icon"
                src={theme === "light" ? profileIcon : profileIconDark}
                alt="Profile"
              />
              <span>Profil</span>
            </Link>
          </div>

          <hr className="separator" />

          <div
            className={
              location.includes("newIdea")
                ? "new_project_button_container active_button"
                : "new_project_button_container"
            }
          >
            <Link to="/newIdea" className="sidebar_desktop_button">
              <img
                className="sidebar_desktop_icon"
                src={theme === "light" ? addProjectIcon : addProjectIconDark}
                alt="Nouvelle idée"
              />
              <span className="new_project_txt">Ajouter une idée</span>
            </Link>
          </div>
        </div>

        {/* Bottom buttons*/}
        <div className="config_buttons">
          <hr className="separator" />

          <div
            className={
              location.includes("filters")
                ? "button_container active_button"
                : "button_container"
            }
          >
            <Link to="/filters" className="sidebar_desktop_button">
              <img
                className="sidebar_desktop_icon"
                src={theme === "light" ? filterIcon : filterIconDark}
                alt="filtres"
              />
              <span>Filtres</span>
            </Link>
          </div>

          <div className="toggle_button_container">
            <ToggleButton/>
            <p className="dark-mode-txt">
              {theme === "dark" ? "Dark mode" : "Light mode"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
