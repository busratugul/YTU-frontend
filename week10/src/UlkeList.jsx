import React, { useState, useEffect } from 'react'
import Ulke from './Ulke'

function UlkeList() {
  const [hata, setHata] = useState(null)
  const [yukleniyor, setYukleniyor] = useState(true)
  const [ulkeler, setUlkeler] = useState([])
  const [arama, setArama] = useState('')
  //const [aramaAlanları] = useState(['name', 'capital'])

  useEffect(() => {
    async function veriCek() {
      try {
        const yanit = await fetch('https://restcountries.com/v3.1/all')
        const JSObjesi = await yanit.json()
        setUlkeler(JSObjesi)
        setYukleniyor(false)
        console.log(ulkeler)
      } catch {
        setHata(false)
      }
    }
    veriCek()
  }, [])

  if (hata) {
    return <main className="alert alert-danger">{hata.message}</main>
  }

  if (yukleniyor) {
    return <main>Yukleniyor...</main>
  }

  function filtrele() {
    return ulkeler.filter((ulke) => {
      const aranan = arama.toLowerCase()
      if (ulke.name?.common.toLowerCase().includes(aranan)) {
        return true
      }
      if (ulke.name?.nativeName.toLowerCase().includes(aranan)) {
        return true
      }
      if (ulke.name?.official.toLowerCase().includes(aranan)) {
        return true
      }
      const ulkeKisaltma = ulke.cca3.toLowerCase()

      if (
        ulke.name['nativeName'] &&
        ulke.name?.nativeName[ulkeKisaltma].official.toLowerCase().includes(aranan)
      ) {
        return true
      }

      if (
        ulke.name['nativeName'] &&
        ulke.name?.nativeName[ulkeKisaltma]?.common
          .toLowerCase()
          .includes(aranan)
      ) {
        return true
      }

      return ulke.capital?.some((baskent) =>
        baskent.toLowerCase().includes(aranan)
      )
    })
  }

  /*   function filtrele(ulkeler) {
    return ulkeler.filter((item) => {
      return ( 
        aramaAlanları.some((newItem) => {
            if(item[newItem]) {
                return item[newItem].toString().toLowerCase().indexOf(arama.toLowerCase()) > 1 }
            })
      })
    })
} */

  return (
    <main className="container">
      <h2 className="text-danger my-3 text-center">
        <strong>Ulke List</strong>
      </h2>
      <div>
        <input
          type="search"
          value={arama}
          onChange={(e) => setArama(e.target.value)}
        />
      </div>
      <div className="row g-3">
        {filtrele(ulkeler).map((ulke, idx) => (
          <Ulke key={idx} ulkeVeri={ulke} />
        ))}
      </div>
    </main>
  )
}

export default UlkeList
