import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
//import css
import "./topBar.css";
//import assets
import migLogo from "../../assets/logo_MIG.svg";
import migLogoDark from "../../assets/logo_MIG_dark.svg";
import notification_icon from "../../assets/icons/notification_icone.svg";
import genericPicture from "../../assets/icons/genericPicture.jpg";
import { MdLogout } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import BurgerButton from "../menuBurger/BurgerButton";
import SearchBar from "../searchBar/SearchBar";
import { useTheme } from "../../utils/context/ThemeContext";

const TopBar = ({ removeToken, token, isMenuBurger, showHideMenuBurger }) => {

  //To know what's the actual color Theme ('dark' or 'light' mode)
  const { theme } = useTheme();

  //Getting user infos
  const { id, firstname, lastname, picture, id_role, id_location } = token;

  //is User modal opened?
  const [isUserMenu, setIsUserMenu] = useState(false);

  //Creating a ref to the User Modal
  const closeUserMenuRef = useRef(null);

  //When click outsit of the User Modal => closing Modal
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        closeUserMenuRef.current &&
        !closeUserMenuRef.current.contains(e.target)
      ) {
        setIsUserMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    //When unmounting component
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //Show/hide User Modal
  const showHideUserModal = (e) => {
    e.stopPropagation();
    setIsUserMenu(!isUserMenu);
  };

  if (!token) return null;

  return (
    <div className="top_bar">
      <Link to={"/"}>
        <img className="logo" src={theme === 'light' ? migLogo : migLogoDark} alt="Make It Grow" />
      </Link>

      <div className="right_container">
        <SearchBar />

        <div className="personnal_profile">
          <img className="notification_icon" src={notification_icon} alt="" />
          <div className="profile_infos" onClick={showHideUserModal}>
            <div className="picture_container">
              <img
                className="profile_picture"
                src={picture ? picture : genericPicture}
                alt="profile picture"
              />
            </div>
            <p className="profile_name">{`${firstname} ${lastname}`}</p>
          </div>
        </div>

        <div
          className={
            isUserMenu ? "user_menu_modal" : "user_menu_modal invisible"
          }
          ref={closeUserMenuRef}
        >
          <Link
            className="user_profile_container"
            to={`/profile/${id}`}
            onClick={(e) => {
              showHideUserModal(e);
            }}
          >
            <AiOutlineUser className="profile-icon" />
            <p className="profile">Accéder à mon profil</p>
          </Link>

          {id_role && id_role === 2 ? (
            <Link
              to={"/admin"}
              className="admin_panel_container"
            >
              <GoGear className="admin_icon" />
              <p className="admin_icon_text">Administration</p>
            </Link>
          ) : null}

          <div className="user_logout_container" onClick={removeToken}>
            <MdLogout className="logout-icon" />
            <p className="logout">Se déconnecter</p>
          </div>
        </div>
        <BurgerButton
          showHideMenuBurger={showHideMenuBurger}
          isMenuBurger={isMenuBurger}
        />
      </div>
    </div>
  );
};

export default TopBar;
