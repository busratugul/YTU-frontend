import React, { useState, useEffect } from 'react'
import Ulke from './Ulke'

function UlkeList() {
  //STATES
  const [hata, setHata] = useState(null)
  const [yukleniyor, setYukleniyor] = useState(true)
  const [ulkeler, setUlkeler] = useState([])
  //arama işlemleri
  const [arama, setArama] = useState('')
  const [filterParam, setFilterParam] = useState('Tümü')

  useEffect(() => {
    async function veriCek() {
      try {
        const yanit = await fetch('https://restcountries.com/v3.1/all')
        const JSObjesi = await yanit.json()
        setUlkeler(JSObjesi)
        setYukleniyor(false)
        //console.log(ulkeler)
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
    return <main>Yükleniyor...</main>
  }

  function filtrele() {
    return ulkeler.filter((ulke) => {
      if (filterParam !== 'Tümü') if (ulke.region !== filterParam) return

      const aranan = arama.toLowerCase()

      //eğer herhangi bir kıta seçildiyse veya tümü seçildiyse
      if (ulke.name?.common.toLowerCase().includes(aranan)) {
        return true
      }
      if (ulke.name?.official.toLowerCase().includes(aranan)) {
        return true
      }
      const ulkeKisaltma = ulke.cca3.toLowerCase()

      if (
        ulke.name['nativeName'] &&
        ulke.name?.nativeName[ulkeKisaltma]?.official
          .toLowerCase()
          .includes(aranan)
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

  return (
    <main className="container">
      <h2 className="text-danger my-3 text-center">
        <strong>Country List</strong>
      </h2>
      <div>
        <input
          className="form-control mb-3 border-3"
          type="search"
          value={arama}
          onChange={(e) => setArama(e.target.value)}
          placeholder="Search..."
        />
        <select
          onChange={(e) => {
            setFilterParam(e.target.value)
          }}
          className="form-select mb-3"
          aria-label="Filter Countries By Region"
        >
          <option value="Tümü">Tümü</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
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
