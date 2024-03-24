import React from 'react'

function GameStart({ name, setName, loginControl, warning }) {
  return (
    <div className="text-center mt-4">
      <h3 className="mt-5 fs-1 text-light">Hoşgeldin {name}</h3>
      <p className="fs-5 mb-5 text-light" style={{ letterSpacing: '0.07rem' }}>
        Deve ve Cüce oyunu, eğlenceli bir refleks oyunudur! Oyunda, ekranda
        beliren develere veya cücelere hızlıca basarak puan kazanırsınız. Ancak
        dikkat edin, doğru figür belirdiğinde doğru hamleyi yapmalısınız, aksi
        takdirde puan kaybedebilirsiniz! Hadi, reflekslerini göster ve en yüksek
        skoru elde etmek için yarış! <br /> Unutma, bu oyun bağımlılık
        yapabilir! <br />
        Hazırsan Başlayalım!
      </p>
      <div className="input-group mb-5 w-50 mx-auto">
        <input
          value={name}
          className="form-control border-light fs-4 px-4"
          placeholder="Bir isim gir :) "
          style={{ letterSpacing: '0.07rem' }}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-light text-dark fs-3" onClick={loginControl}>
          Hadi
        </button>
      </div>
      <div className="text-warning fs-4 mb-3 d-block"> {warning} </div>
    </div>
  )
}

export default GameStart
