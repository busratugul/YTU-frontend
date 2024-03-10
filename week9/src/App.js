import React from 'react'
import KisiListe from './components/KisiListe'
import KisiEkle from './components/KisiEkle'

function App() {
  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>
        <KisiEkle/>
        <KisiListe />
      </section>
    </>
  )
}

export default App
