import React, { useState } from 'react'
import './App.css'
import GameStart from './components/GameStart'
import GamePage from './components/GamePage'

const gameArr = ['DEVE', 'CÜCE']

function App() {
  //GameStart states
  const [start, setStart] = useState(false)
  const [firstname, setFirstname] = useState('')
  const [warning, setWarning] = useState('')

  //GamePage states
  const [count, setCount] = useState(3)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [selectWord, setSelectWord] = useState('BAŞLA')
  const [hearth, setHearth] = useState(3)
  const [timer, setTimer] = useState(null)
  const [scor, setScor] = useState(0)

  //OYUNUN BAŞLAMASI İÇİN GEREKLİ KONTROLLERİN YAPILMASI
  function startGame() {
    if (firstname.length >= 3) {
      setStart(true)
    } else {
      setWarning('İsim boş bırakılamaz :(')
    }
  }

  //DEVE VE CÜCE RANDOM KONUM AYARLAMA
  function getRandomPosition() {
    const width = 400
    const height = 300
    const randomX = Math.floor(Math.random() * width)
    const randomY = Math.floor(Math.random() * height)
    //console.log(randomX, randomY)
    setPosition({ x: randomX, y: randomY })
  }

  //RANDOM KELİME SEÇME
  function selectedWord() {
    const randomIdx = Math.floor(Math.random() * gameArr.length)
    const selectedWord = gameArr[randomIdx]
    setSelectWord(selectedWord)
  }

  //CAN KONTROLU VE SCOR HESAPLANMASI
  function decreaseHearth() {
    console.log('decrease heart çalışıyor')
    clearInterval(timer)
    console.log(timer)
    getRandomPosition()
    selectedWord()
    if (selectWord !== 'BAŞLA') {
      setScor((prev) => prev + 10)
    }

    setTimer(
      setInterval(() => {
        getRandomPosition()
        selectedWord()
        scor !== 0 && setScor((prev) => prev - 10)
        setHearth((prev) => prev - 1)
      }, 2000)
    )
  }

  //RENDER EKRANI AYARLAMA
  //oyun başlamışsa ve oyuncunun canı varsa
  if (start) {
    return (
      <main className="container">
        <GamePage
          count={count}
          setCount={setCount}
          getRandomPosition={getRandomPosition}
          position={position}
          selectedWord={selectedWord}
          selectWord={selectWord}
          name={firstname}
          hearth={hearth}
          decreaseHearth={decreaseHearth}
          scor={scor}
          setStart={setStart}
        />
      </main>
    )
  }
  //oyun başlamamışsa giriş ekranı
  if (!start) {
    return (
      <main className="container">
        <GameStart
          name={firstname}
          setName={setFirstname}
          startGame={startGame}
          warning={warning}
        />
      </main>
    )
  }
}

export default App
