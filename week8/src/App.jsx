import React from 'react'
import { useState } from 'react'
function App() {
  const [car, setCar] = useState(0)
  function handleClick() {
    setCar(car + 1)
  }

  const fiyat = 20
  return (
    <div>
    <h4>Araba Sayısı: {car}</h4>
    <p>Araba fiyatı : {car * fiyat}</p>
  
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
