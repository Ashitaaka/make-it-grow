import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './profiledetails.css'


const ProfileDetails = () => {

    const {userid} = useParams()
    const [user, setUser] = useState({})
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [locations, setLocations] = useState([])

    useEffect(()=>{
    axios.get(`http://localhost:5080/api/users/${userid}/?fields=id,firstname,lastname,picture,occupation,locations,email`)
        .then((res)=>(res.data))
        .then((data) => {
          setUser(...data)
          setIsDataLoaded(true)
        })       
    },[])

    useEffect(()=>{
    axios.get(`http://localhost:5080/api/locations`)
        .then((res)=>(res.data))
        .then((data) => {
          setLocations(data)
        })       
    },[])



console.log(locations);

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

        <div className="update_profile">
          <h2>Modifiez vos informations</h2>
          <div className="update_content">
              <div className='left_fields'>
                <label htmlFor='firstname'> Nom : </label>
                  <input placeholder={user.firstname} type="text" name="firstname" /> 
                <label htmlFor='lastname'> Prénom : </label>
                  <input placeholder={user.lastname} type="text" name="lastname" />
                <label> Service : <input placeholder={user.service} type="text" name="service" /> </label>
                <label> Fonction : <input placeholder={user.occupation} type="text" name="occupation" /> </label>
              </div>
              <div className='right_fields'>
                <label> Mot de passe : <input type="text" name="password" /> </label>
                <label> Confirmer mot de passe : <input type="text" name="confirm_password" /></label>
                Pays :<br />
                  <select>
                    {locations && locations.map((location)=>(
                      <option value={location.id} >{location.country}</option>
                    ))}
                  </select>
                Ville :<br />
                  <select>
                    {locations && locations.map((location)=>(
                      <option value={location.id} >{location.city}</option>
                    ))}
                  </select>
              </div>
          </div>
        </div>
      </div>
  )
}

export default ProfileDetails