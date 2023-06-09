import React, { useState } from 'react'

//import assets
import homeIcon from '../../assets/icons/home_icone.svg'
import profileIcon from '../../assets/icons/profile_icone.svg'
import addProjectIcon from '../../assets/icons/new_project_icone.svg'
import filterIcon from '../../assets/icons/filter-icon.svg'

//import css
import './sidebar.css'
import ToggleButton from '../toggle button/ToggleButton'

const Sidebar = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);


  return (
    <div className='sidebar'>

      <div className='sidebar_menu_buttons'>
        <div className='button_container'>
            <a href='#' className='sidebar_button'>
              <img className ='sidebar_icon' src={homeIcon} alt='Home' />
              <span>Home</span>
            </a>
        </div>
        
        <div className='button_container'>
            <a href='#' className='sidebar_button'>
              <img className ='sidebar_icon' src={profileIcon} alt='Profile' />
              <span>Profile</span>
            </a>
        </div>
        <hr className='separator'/>
        <div className='new_project_button_container'>
          <a href='#' className='sidebar_button'>
            <img className ='sidebar_icon' src={addProjectIcon} alt='Nouvelle idée' />
            <span className='new_project_txt'>Ajouter une idée</span>
          </a>
        </div>
      </div>

      <div className='config_buttons'>
        <hr className='separator'/>
        <div className='button_container'>
            <a href='#' className='sidebar_button'>
              <img className ='sidebar_icon' src={filterIcon} alt='filtres' />
              <span>Filtres</span>
            </a>
        </div>
        <div className='toggle_button_container'>
              <ToggleButton 
                isDarkMode = {isDarkMode}
                setIsDarkMode = {setIsDarkMode}
              />
          <p className='dark-mode-txt'>{isDarkMode ? 'Dark mode' : 'Light mode'}</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar