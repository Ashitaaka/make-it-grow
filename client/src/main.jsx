import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import  UserProvider  from './hooks/UserContext'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <UserProvider>
    <Router>
        <App />
    </Router>
  </UserProvider>
  //</React.StrictMode>,
)
