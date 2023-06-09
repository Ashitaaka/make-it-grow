import React, { useEffect, useState } from 'react'
import ProfileDetails from '../components/ProfileDetails/ProfileDetails'
import { Link } from 'react-router-dom'

const Profile = () => {

  return (
        <>
            <Link to = {'/profile/1'}>
            <ProfileDetails />
            </Link>
        </>
  )
}

export default Profile