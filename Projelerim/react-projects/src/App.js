import React from 'react'
import './App.css'
import Reviews from './projects/3-Review/Reviews'
import Loading from './components/Loading'

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
