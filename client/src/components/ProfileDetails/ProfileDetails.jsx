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
      <>
        <p>{user.firstname}</p>
        <img src={user.picture} alt="" />
      </>

  )
}

export default ProfileDetails