import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
const { user } = useContext(UserContext)

if (!user) {
    return <div className='text-red-500 text-xl py-3'>Please log in to see your profile.</div>
}

  return (
    <div>Profile : {user.username}</div>
  )
}

export default Profile