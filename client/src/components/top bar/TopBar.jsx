import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import css
import './topBar.css'
//import assets
import mig_logo from '../../assets/logo_MIG.svg'
import search_icon from '../../assets/icons/search_icone.svg'
import notification_icon from '../../assets/icons/notification_icone.svg'
import genericPicture from '../../assets/icons/genericPicture.jpg'
import { MdLogout } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import BurgerButton from '../menu burger/burgerButton'


const TopBar = ({ removeToken, token, isMenuBurger, showHideMenuBurger }) => {

    //Getting user infos
    const { id, firstname, lastname, picture, id_role, id_location } = token;

    //is User modal opened?
    const [ isUserMenu, setIsUserMenu ] = useState(false);

    //Creating a ref to the User Modal
    const closeUserMenuRef = useRef(null);

    //When click outsit of the User Modal => closing Modal
    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (closeUserMenuRef.current && !closeUserMenuRef.current.contains(e.target)) {
            setIsUserMenu(false);
          }
        };

        document.addEventListener('click', handleOutsideClick);

        //When unmounting component
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
    }, []);    

    //Show/hide User Modal
    const showHideUserModal = (e) => {
        e.stopPropagation();
        setIsUserMenu(!isUserMenu)
    }

    //on changing search bar input
    const onSearch = (e) =>{
        console.log(e.target.value)
    }

    if(!token) return null;

    return (
        <div className='top_bar'>
            <Link 
                to={'/'}
            >
                <img className="logo" src={mig_logo} alt="Make It Grow" />
            </Link>

            <div className="right_container">
                <div className="searchbar">
                    <img className="search_icon" src={search_icon} alt="" />
                    <input type="text" id="search_input" name="search_input" onKeyUp={onSearch} placeholder="Rechercher une idée" />
                </div>
               
                <div className="personnal_profile">
                    <img className="notification_icon" src={notification_icon} alt="" />
                    <div 
                        className="profile_infos"
                        onClick={showHideUserModal}
                    >
                        <img className='profile_picture' src={picture? picture : genericPicture} alt="profile picture" />
                        <p className='profile_name'>{`${firstname} ${lastname}`}</p>
                    </div>
                </div>
                
                <div 
                    className={isUserMenu ? 'user_menu_modal' : 'user_menu_modal invisible'} 
                    ref={closeUserMenuRef}
                >
                    <div className="user_logout_container"  onClick={removeToken}>
                        <MdLogout className='logout-icon'/>
                        <p className="logout">Se déconnecter</p>
                    </div>
                
                    <Link 
                        className="user_profile_container"
                        to={`/profile/${id}`}
                        onClick={(e)=>{
                            showHideUserModal(e)
                        }}
                    >
                        <AiOutlineUser className='profile-icon'/>
                        <p className="profile">Accéder à mon profil</p>
                    </Link>  
                </div>
                <BurgerButton 
                    showHideMenuBurger={showHideMenuBurger}
                    isMenuBurger = {isMenuBurger}
                />                  
            </div>
        </div>
    )
}

export default TopBar