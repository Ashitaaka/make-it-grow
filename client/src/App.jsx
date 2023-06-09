import {Routes, Route} from 'react-router-dom'
//import components
import Home from './pages/Home'
import Sidebar from './components/sidebar/Sidebar'
//import css
import './app.css'
import ProfileDetails from './components/ProfileDetails/ProfileDetails'

function App() {

  return (
      <div className='app'>
        <Sidebar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile/:userid' element={<ProfileDetails/>}/>
        </Routes>
      </div>
  )
}

export default App
