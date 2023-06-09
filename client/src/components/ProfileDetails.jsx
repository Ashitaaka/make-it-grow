import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ProfileDetails = () => {

    const {userid} = useParams()
    const [user, setUser] = useState([])


    useEffect(()=>{
    axios.get(`http://localhost:5080/api/users/${userid}/?fields=id,firstname,lastname,picture,occupation,locations,email`)
        .then((res)=> setUser(res.data))
        
},[])

console.log(user);

  return (
    <div>Profile</div>
  )
}

export default ProfileDetails