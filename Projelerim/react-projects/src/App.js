import React from 'react'
import Reviews from './projects/3-Review/Reviews'

function App() {
  let App = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div style={App} className="container">
      <Reviews />
    </div>
  )
}

export default App
