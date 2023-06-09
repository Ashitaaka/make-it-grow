import {Routes, Route} from 'react-router-dom'
//import components
import Profile from './pages/Profile'
import Home from './pages/Home'
import Sidebar from './components/sidebar/Sidebar'
//import css
import './app.css'

function App() {

  return (
      <div className='app'>
        <Sidebar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile/:id' element={<Profile/>}/>
        </Routes>
      </div>
  )
}

export default App
