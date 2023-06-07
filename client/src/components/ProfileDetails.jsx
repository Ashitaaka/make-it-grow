import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const ProfileDetails = () => {
    const [user, setUser] = useState([])


    useEffect(()=>{
    axios.get(`http://localhost:5080/api/users/`)
        .then((res)=> setUser(res.data))
},[])

  return (
    <div>Profile</div>
  )
}

export default ProfileDetails