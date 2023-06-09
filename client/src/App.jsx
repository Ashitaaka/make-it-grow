import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ProfileDetails from './components/ProfileDetails/ProfileDetails'

function App() {

  return (
      <div className='app'>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile/:userid' element={<ProfileDetails/>}/>
        </Routes>
      </div>
  )
}

export default App
