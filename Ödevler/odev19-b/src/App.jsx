import React, { useState } from 'react'
import './App.css'
import GameStart from './components/GameStart'
import GamePage from './components/GamePage'

function App() {
  //GameStart states
  const [start, setStart] = useState(false)
  const [firstname, setFirstname] = useState('')
  const [uyari, setUyari] = useState('')

  //GamePage states
  const [count, setCount] = useState(3)

  function startGame() {
    if (firstname.length >= 3) {
      setStart(true)
    } else {
      setUyari('İsim boş bırakılamaz :(')
    }
  }

  if(start){
    return(
      <main className='container'><GamePage count={count} setCount={setCount}/></main>
    )
  }

  if (!start) {
    return (
      <main className="container">
        <GameStart
          name={firstname}
          setName={setFirstname}
          startGame={startGame}
          uyari={uyari}
        />
      </main>
    )
  }
}

export default App
