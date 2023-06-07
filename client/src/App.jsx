import {Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'

function App() {

  return (
      <div className='app'>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile/:id' element={<Profile/>}/>
        </Routes>
      </div>
  )
}

export default App
