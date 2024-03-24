import React, { useEffect, useState } from 'react'
import './App.css'
import GameStart from './components/GameLogin'
import GamePage from './components/GamePage'

const wordArr = ['CÜCE', 'DEVE']

function App() {
  //STATES
  //login kontrolleri
  const [firstname, setFirstname] = useState('')
  const [isName, setIsName] = useState(false)
  const [warning, setWarning] = useState('')
  //başla butonu kontrolü
  const [start, setStart] = useState(false)
  //random buton konumları ayarlayan stateler
  const [position1, setPosition1] = useState({ x: '0', y: '0' })
  const [position2, setPosition2] = useState({ x: '0', y: '0' })
  //random seçilen kelime
  const [randomWord, setRandomWord] = useState('')
  //can kontrolü
  const [heart, setHeart] = useState(3)
  //scor kontrolü
  const [scor, setScor] = useState(0)
  //click kontrol
  const [isClicked, setIsClicked] = useState(false)
  //tıklamadan sonra işlev dışı olma kontrolü
  const [disabled, setDisabled] = useState(false)

  //FUNCTIONS
  function loginControl() {
    if (firstname.length >= 3) {
      setIsName(true)
    } else if (firstname.length < 3 && firstname) {
      setWarning('İsim en az 3 karakterli olmalı !!')
    } else {
      setWarning('İsim boş bırakılamaz :(')
    }
  }

  //butonlar için rastgele konum ayarlama
  function getRandomPosition() {
    const width = 400
    const height = 300
    const minDistance = 250 // İki buton arasındaki minimum mesafe
    let randomX1, randomY1, randomX2, randomY2
    // DEVE BUTONU
    randomX1 = Math.floor(Math.random() * width)
    randomY1 = Math.floor(Math.random() * height)
    // CÜCE BUTONU
    randomX2 = Math.floor(Math.random() * width)
    randomY2 = Math.floor(Math.random() * height)
    // butonlar çakışıyor mu kontrolü
    switch (true) {
      case Math.abs(randomX2 - randomX1) < minDistance:
      case Math.abs(randomY2 - randomY1) < minDistance:
        // Çakışma varsa, yeni pozisyon ayarla
        return getRandomPosition()
      default:
        // Çakışma yoksa, pozisyonları ayarla
        setPosition1({ x: randomX1, y: randomY1 })
        setPosition2({ x: randomX2, y: randomY2 })
        break
    }
  }

  //random kelime seçme
  function generateRandomWord() {
    const randomIdx = Math.floor(Math.random() * wordArr.length)
    const newWord = wordArr[randomIdx]
    setRandomWord(newWord)
  }
  //random kelime ile eşleşen butona basıldıysa
  function correctBtn() {
    setIsClicked(true)
    setDisabled(true)
    setScor((prev) => prev + 1)
  }

  //random kelime ile eşleşen butona basılmadıysa
  function wrongBtn() {
    setIsClicked(true)
    setDisabled(true)

    if (scor > 0) {
      setScor((prev) => prev - 1)
    }
    setHeart((prev) => prev - 1)
  }

  //Oyunu başlatıyor
  useEffect(() => {
    const startInterval = setInterval(() => {
      generateRandomWord()
      getRandomPosition()
      if (isClicked) {
        setIsClicked(false)
        setDisabled(false)
      } else if (!isClicked && start) {
        setHeart((prev) => prev - 1)
        setDisabled(false)
      }
    }, 2000)

    return () => {
      clearInterval(startInterval)
    }
  }, [start])

  //yeniden oyna aktif
  function refreshPage() {
    setScor(0)
    setHeart(3)
    window.location.reload()
  }

  //RENDER EKRANI AYARLAMA
  //oyun başlamışsa ve oyuncunun canı varsa
  if (isName) {
    return (
      <main className="container">
        <GamePage
          isName={isName}
          position1={position1}
          position2={position2}
          randomWord={randomWord}
          name={firstname}
          heart={heart}
          scor={scor}
          start={start}
          setStart={setStart}
          correctBtn={correctBtn}
          wrongBtn={wrongBtn}
          refreshPage={refreshPage}
          disabled={disabled}
        />
      </main>
    )
  }
  //oyuncu giriş ekranı
  if (!start) {
    return (
      <main className="container">
        <GameStart
          name={firstname}
          setName={setFirstname}
          loginControl={loginControl}
          warning={warning}
        />
      </main>
    )
  }
}

export default App
