import React, { useState, useEffect } from 'react'
import Kisi from './components/Kisi'

function App() {
  const [veri, setVeri] = useState([])

  useEffect(() => {
    async function rehberCek() {
      const rehberJSON = await localStorage.getItem('rehberJSON')
      const rehberVeri = JSON.parse(rehberJSON)

      setVeri(rehberVeri)
    }
    rehberCek()
  }, [])

  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>
        <div className="row">
          {veri.map((eleman, idx) => (
            <Kisi ad={eleman.ad} tel={eleman.tel} key={idx} />
          ))}
        </div>
      </section>
    </>
  )
}

export default App
