import React, { useState, useEffect } from 'react'
import GameStart from './GameStart'

function GameOver({ scor, name}) {
    
  const [gameOver, setGameOver] = useState(false)

  return (
    <>
      {!gameOver && (
        <div className="text-light fs-1 text-center">
          {scor <= 50 && (
            <div>
              <h3 className="overScor">Skor: {scor}</h3>
              <h1 className="mt-4">Oyun Bitti {name}</h1>
              <p>
                Hepimiz Çok İyi Biliyoruz ki <br />
                Eğer Odaklanırsan Çok Daha İyisini Yapabilirsin !! <br />
                Hadi Göster Kendini :)
              </p>
            </div>
          )}

          {scor <= 150 && scor > 50 && (
            <div>
              <h3 className="overScor">Skor: {scor}</h3>
              <h1>Tebrikler {name}</h1>
              <p>
                Gözünden Hiçbir Şey Kaçmadığını Kanıtladın. Daha da İyisini
                Yapabilirim Diyorsan Hadi Göster Kendini :)
              </p>
            </div>
          )}

          {scor <= 350 && scor > 150 && (
            <div>
              <h3 className="overScor">Skor: {scor}</h3>
              <h1>Harikasın {name}</h1>
              <p>
                Gösterdiğin Performansla Herkesi Şaşırttın. Bu Başarıyı Daha da
                Yükselt. Ve Ben Rakipsizim Diyorsan Hadi Göster Kendini :)
              </p>
            </div>
          )}
          <div style={{ height: '20rem' }}>
            <button
              className="mb-5 btn btn-success"
              style={{ letterSpacing: '0.1rem' }}
            >
              Tekrar Oyna
            </button>
          </div>
        </div>
      )}
      {gameOver &&(
        <main className="container">
          <GameStart name={name} />
        </main>
      )}
    </>
  )
}

export default GameOver
