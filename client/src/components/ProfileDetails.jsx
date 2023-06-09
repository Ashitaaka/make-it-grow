import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


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
        <img src='/images/profile-pictures/martin.jpg' alt="" />
      </>

  )
}

export default ProfileDetails