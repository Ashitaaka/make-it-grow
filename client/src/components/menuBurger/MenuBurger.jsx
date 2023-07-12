import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
//import assets
import { MdLogout } from 'react-icons/md'
import { GoGear } from 'react-icons/go'
import { TbFilter } from 'react-icons/tb'
import homeIcon from "../../assets/icons/home_icone.svg";
import profileIcon from "../../assets/icons/profile_icone.svg";
import notification_icon from "../../assets/icons/notification_icone.svg"
import genericPicture from "../../assets/icons/genericPicture_2.jpg" 
import addProjectIcon from "../../assets/icons/new_project_icone.svg";
import search_icon from '../../assets/icons/search_icone.svg'

//import css
import "./menuBurger.css"

const MenuBurger = ({ removeToken, token, isMenuBurger, showHideMenuBurger }) => {

    //To know what's the current URL
    const location = useLocation().pathname;

    //Getting user infos
    const { id, firstname, lastname, picture, id_role } = token;
    
    //on changing search bar input
    const onSearch = (e) =>{
        console.log(e.target.value)
    }
    
  return (
    <div 
        className={isMenuBurger 
            ? 'burger_menu' 
            : 'burger_menu invisible'}
    >
        <div  className="burger_profile_infos">
            <div className="burger_picture_container">
                <img
                    className='burger_profile_picture'
                    src={picture? picture : genericPicture}
                    alt="profile picture"
                />
            </div>
            <p className='burger_profile_name'>
                {`${firstname} ${lastname}`}
            </p>
        </div>
                
        <hr />

        <div className={location.includes("dashboard") 
            ? "burger_button_container active_button"
            : "burger_button_container"}
        >
            <Link 
                to={"/dashboard"} 
                className="burger_button"
                onClick={showHideMenuBurger}
            >
                <img className="burger_icon" src={homeIcon} alt="Home" />
                <span>Home</span>
            </Link>
        </div>

        <div className={location.includes("profile") 
            ? "burger_button_container active_button"
            : "burger_button_container"}
        >
            <Link 
                to={`/profile/${id}`} 
                className="burger_button"
                onClick={showHideMenuBurger}
            >
                <img
                className="burger_icon"
                src={profileIcon}
                alt="Profile"
                />
                <span>Profil</span>
            </Link>
        </div>

        <div className={location.includes("notifications") 
            ? "burger_button_container active_button"
            : "burger_button_container"}
        >
            <Link 
                to={"/notifications"} 
                className="burger_button"
                onClick={showHideMenuBurger}
            >
                <img
                className="burger_notifications_icon"
                src={notification_icon}
                alt="Notifications"
                />
                <span>Notifications</span>
            </Link>
        </div>

        <div className={location.includes("newIdea")
            ? "burger_button_container idea_button active_button"
            : "burger_button_container idea_button"}
        >
            <Link 
                to={"/newIdea"} 
                className="burger_button"
                onClick={showHideMenuBurger}
            >
                <img
                className="burger_notifications_icon"
                src={addProjectIcon}
                alt="Notifications"
                />
                <span>Ajouter une idée</span>
            </Link>
        </div>

        <hr />

        <div className="burger_searchbar">
            <img className="burger_search_icon" src={search_icon} alt="" />
            <input 
                type="text" 
                id="burger_search_input" 
                name="burger_search_input" 
                onKeyUp={onSearch} 
                placeholder="Rechercher une idée" 
            />
        </div>

        <Link 
            to={"/filters"} 
            className="burger_logout_container"
            onClick={showHideMenuBurger}
        >
            <TbFilter className='filter_icon'/>
            <p className="logout">Filtres</p>
        </Link> 
      
        {id_role === 2
        ?<Link 
            to={"/admin"} 
            className="burger_config_container"
            onClick={showHideMenuBurger}
        >
            <GoGear className='config_icon'/>
            <p className="logout">Administration</p>
        </Link> 
        : null}
        <div 
            className="burger_logout_container"  
            onClick={removeToken}
        >
            <MdLogout className='logout_icon'/>
            <p className="logout">Se déconnecter</p>
        </div> 

    </div>
  )
}

export default MenuBurger