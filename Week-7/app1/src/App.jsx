import React from 'react'
import { Component } from './components/first'
import { Kart } from './components/Kart'
import { kartlar } from './veri.js'

function App() {
  const yas = 41
  let mesaj
  if (yas > 18) {
    mesaj = '18 yasindan büyüksünüz - if blogu'
  } else {
    mesaj = '18 veya daha küçük bir yaştasınız'
  }

  function adSoyad(ad, soyad) {
    return 'Adın:' + ad + ' ' + soyad
  }

  return (
    <>
      <p>Paragraf 1</p>
      <p>Merhaba {adSoyad('Busra', 'Tugul')} </p>

      {/* <img className='kenarlik' src="https://picsum.photos/id/24/200/200" alt="" /> */}
      {/* TERNARY OPERATOR */}

      {yas < 18
        ? '18 yasindan kucuksunuz'
        : yas < 41
        ? 'Orta Yaşlısınız'
        : 'Yaşlısınız'}
      <p>{mesaj}</p>

      <Component />
      <Component>Merhaba</Component>

      <section className="container mt-5">
        <h1 className="text-center">Kartlar</h1>
        <div className="row">
          {/* <Kart foto={1} baslik={"Kalem"}/>
        <Kart foto={2} baslik={"Kitap"}/>
        <Kart foto={3} baslik={"Defter"}/>
        <Kart foto={4} baslik={"Uç"}/>
        <Kart foto={5} baslik={"Silgi"}/>
        <Kart foto={6} baslik={"Postit"}/>
        <Kart foto={7} baslik={"Sticker"}/>
        <Kart foto={8} baslik={"Daksil"}/> */}
          {kartlar.map((kart) => {
            return (
              <Kart key={kart.foto} baslik={kart.baslik} foto={kart.foto} />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App
