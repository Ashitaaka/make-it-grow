import React, { useState } from 'react'

//Import CSS
import './toggleButton.css'


const ToggleButton = ({isDarkMode, setIsDarkMode}) => {

const darkModeButton = () =>{
    setIsDarkMode(!isDarkMode)
}

  return (
    
        <div 
            onClick={darkModeButton}
            className={!isDarkMode ? "switch-background" : "switch-background switched-background"}>
                <div 
                    className={isDarkMode ? "switch-button" : "switch-button switched-button"}>
                </div>
        </div>
  )
}

export default ToggleButton