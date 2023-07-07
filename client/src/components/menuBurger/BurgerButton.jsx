import React from 'react'
import "./burgerButton.css"

const BurgerButton = ({ showHideMenuBurger, isMenuBurger }) => {
  return (
    <div 
      className='burger'
      onClick={showHideMenuBurger}
    >
        <span className={isMenuBurger ? 'burger_button_bar active' : 'burger_button_bar'}></span>
        <span className={isMenuBurger ? 'burger_button_bar active' : 'burger_button_bar'}></span>
        <span className={isMenuBurger ? 'burger_button_bar active' : 'burger_button_bar'}></span>
    </div>
  )
}

export default BurgerButton