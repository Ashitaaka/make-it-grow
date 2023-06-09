import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './profiledetails.css'


const ProfileDetails = () => {

    const {userid} = useParams()
    const [user, setUser] = useState({})
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    useEffect(()=>{
    axios.get(`http://localhost:5080/api/users/${userid}/?fields=id,firstname,lastname,picture,occupation,locations,email`)
        .then((res)=>(res.data))
        .then((data) => {
          setUser(...data)
          setIsDataLoaded(true)
        })
        
},[])


return !isDataLoaded ?  null : 

 (
      <div className='profile_page'>
        <div className="profile_container">
          <div className="profile_head">
            <img src={user.picture} alt="" />
            <div className="profile_infos">
              <div className="profile_name">
                <h1>{user.firstname} {user.lastname}</h1>
                <p className='occupation'>{user.occupation}</p>
              </div>
              <button className='button_profil'>Modifier le profil</button>
            </div>
          </div>

          <div className="profile_content">
              <div className="profile_details">
                <p>Email:</p>
                <p>{user.email}</p>
                <br />
                <p>Ville:</p>
                <p>{user.city}</p>
                <br />
                <p>Pays:</p>
                <p>{user.country}</p>
              </div>
          </div>
        </div>
      </div>

  )
}

export default ProfileDetails