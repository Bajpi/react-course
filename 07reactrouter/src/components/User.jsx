import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='bg-orange-500 text-black text-3xl py-4'>User: {userid}</div>
  )
}

export default User