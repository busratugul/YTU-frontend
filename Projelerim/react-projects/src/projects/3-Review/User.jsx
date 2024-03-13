import React, { useState } from 'react'
import Loading from '../../components/Loading'

function User({ userInfo }) {
  let userDiv = {
    width: '70%',
    height: '50%',
    textAlign: 'center',
  }

  console.log(userInfo)
  return (
    <div style={userDiv}>
      {userInfo ? (
        <div className="card shadow mt-5 text-center" style={{ width: '100%' }}>
          <img
            src={userInfo.picture.medium}
            className="card-img-top rounded-circle mx-auto mt-3"
            alt="profil_img"
            style={{ width: '7rem' }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {userInfo.name.first} {userInfo.name.last}
            </h5>
            <small>{userInfo.location.country}</small>
            <p className="card-text mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum ullam est eligendi eum impedit deserunt nesciunt
              praesentium architecto placeat qui?
            </p>
            <button className="btn btn-primary" >
              Surprise Me
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default User
