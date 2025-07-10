import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);               
    //             setData(data)
    //         })
    // }, [])

  return (
    <div className='bg-gray-600 text-white m-4 p-4 text-3xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Avatar" className='w-32 h-32 rounded-full' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}