import React from 'react'

function Loading() {
  let loading = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  console.log('loading')
  return (
    <div style={loading}>
      <div className="spinner-border" role="status"></div>
      <b className="visually-visible mt-3 text-body-secondary">LOADING</b>
    </div>
  )
}

export default Loading
