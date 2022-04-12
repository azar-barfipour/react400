import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProfile } from '../util'

const Profile = () => {
    const [profile, setProfile] = useState(null)

    const location = useLocation()
    const { authorId } = location.state

    useEffect(() => {
        getProfile(authorId).then(setProfile)
    }, [authorId])

    if(!profile){
        return <h1>Loading Profile....</h1>
    }
  return (
    <>
        <p>{profile.username}</p>
        <p>{profile.phone}</p>
        <p>{profile.website}</p>
    </>
  )
}

export default Profile