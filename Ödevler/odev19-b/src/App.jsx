import React, { useState, useEffect } from 'react'
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
  const [position1, setPosition1] = useState({ x: '0', y: '0' })
  const [position2, setPosition2] = useState({ x: '0', y: '0' })
  const [selectWord, setSelectWord] = useState('BAŞLA')
  const [heart, setHeart] = useState(3)
  const [timer, setTimer] = useState()
  const [scor, setScor] = useState(0)
  const [over, setOver] = useState(false)

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

  //RANDOM KELİME SEÇME
  function selectedWord() {
    const randomIdx = Math.floor(Math.random() * gameArr.length)
    const selectedWord = gameArr[randomIdx]
    setSelectWord(selectedWord)
  }

  //CAN KONTROLU VE SCOR HESAPLANMASI
  function decreaseHeart() {
    console.log('decrease heart çalışıyor');
    getRandomPosition();
    selectedWord();
    
    if (selectWord !== 'BAŞLA') {
      setScor((prev) => prev + 10);
    }
  
    setTimeout(() => {
      if (scor > 0 && heart > 0 && !over) {
        setScor((prev) => prev - 10);
        setHeart((prev) => prev - 1);
        decreaseHeart(); // Bir sonraki adımı beklemek için decreaseHeart fonksiyonunu tekrar çağırın
      }
      if (over || heart === 0) {
        setOver(true);
        console.log('oyun bitti');
      }
    }, 2000);
  }

  //RENDER EKRANI AYARLAMA
  //oyun başlamışsa ve oyuncunun canı varsa
  if (start) {
    return (
      <main className="container">
        <GamePage
          position1={position1}
          position2={position2}
          selectWord={selectWord}
          name={firstname}
          heart={heart}
          decreaseHeart={decreaseHeart}
          scor={scor}
          start={start}
          timer={timer}
          over={over}
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
