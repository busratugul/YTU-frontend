import React, { useEffect, useState } from 'react'

function App() {
  const [paragrafGoster, setParagrafGoster] = useState(true)
  const [sayac, setSayac] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setParagrafGoster(false)
      setSayac((eskiDeger) => eskiDeger + 5)
    }, 2000)
  })

  return (
    <>
      {paragrafGoster && <p id="p1">App</p>}
      Sayaç: {sayac}
    </>
  )
}

export default App
