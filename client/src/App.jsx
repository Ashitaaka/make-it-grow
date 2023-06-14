import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
//import components
import Home from './pages/Home'
import Sidebar from './components/sidebar/Sidebar'
import ProfileDetails from './components/ProfileDetails/ProfileDetails'
import TopBar from './components/top bar/TopBar'
//import css
import './App.css'

function App() {

  //to know which button is active
  const [clickedButton , setClickedButton] = useState("")

  return (
      <div className='app'>
        <Sidebar clickedButton={clickedButton} setClickedButton={setClickedButton}/>
        <div className='app_container'>
          <TopBar clickedButton={clickedButton} setClickedButton={setClickedButton}/>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/profile/:userid' element={<ProfileDetails/>}/>
          </Routes>
        </div>
      </div>
  )
}

export default App
