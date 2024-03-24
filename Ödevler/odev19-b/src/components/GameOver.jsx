import React from 'react'

function GameOver({ scor, name }) {

  if (scor <= 50) {
    return (
      <div className="overContainer">
        <h3 className="overScor">Skor: {scor}</h3>
        <h1 className="mt-4">Oyun Bitti {name}</h1>
        <p className="fs-4">
          Hepimiz Çok İyi Biliyoruz ki <br />
          Eğer Odaklanırsan Çok Daha İyisini Yapabilirsin !! <br />
          Hadi Göster Kendini :)
        </p>
      </div>
    )
  } else if (scor <= 150 && scor > 50) {
    return (
      <div className="overContainer">
        <h3 className="overScor">Skor: {scor}</h3>
        <h1>Tebrikler {name}</h1>
        <p className="fs-4">
          Gözünden Hiçbir Şey Kaçmadığını Kanıtladın. Daha da İyisini
          Yapabilirim Diyorsan Hadi Göster Kendini :)
        </p>
      </div>
    )
  } else {
    return (
      <div className="overContainer">
        <h3 className="overScor">Skor: {scor}</h3>
        <h1>Harikasın {name}</h1>
        <p className="fs-4">
          Gösterdiğin Performansla Herkesi Şaşırttın. Bu Başarıyı Daha da
          Yükselt. Ve Ben Rakipsizim Diyorsan Hadi Göster Kendini :)
        </p>
      </div>
    )
  }
}

export default GameOver
