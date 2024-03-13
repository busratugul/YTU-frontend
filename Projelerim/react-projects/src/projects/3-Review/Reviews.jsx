import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'
import Loading from '../../components/Loading'

function Reviews() {
  const [user, setUser] = useState(null)

  useEffect(() => {getUser()}, [])
  
  //USER GENERATOR API
  async function getUser() {
    try {
      const response = await axios.get('https://randomuser.me/api/')
      setUser(response.data.results[0])
    } catch (error) {
      console.error('An error occurred while loading the data.')
    }
  }
  return (
    <>
      {!user ? (
        <Loading />
      ) : (
        <>
          <h1>Our Reviews</h1>
          <div
            className="border-4 border-primary border-bottom border-opacity-50"
            style={{ width: '70px' }}
          ></div>
          <User userInfo={user} handleClick = {getUser} />
        </>
      )}
    </>
  )
}

export default Reviews
