import React, { useState } from 'react'

//import components
import  {useTheme}  from '../../utils/context/ThemeContext'

//Import CSS
import './toggleButton.css'


const ToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    
        <div 
            onClick={toggleTheme}
            className={theme === "light" ? "switch-background" : "switch-background switched-background"}>
                <div 
                    className={theme === "dark" ? "switch-button" : "switch-button switched-button"}>
                </div>
        </div>
  )
}

export default ToggleButton