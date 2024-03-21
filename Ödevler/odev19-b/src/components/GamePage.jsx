import React, { useEffect } from 'react'
import { IoIosHeartHalf } from 'react-icons/io'
import GameOver from './GameOver'

function GamePage({
  count,
  setCount,
  position,
  selectWord,
  name,
  hearth,
  decreaseHearth,
  scor,
  setStart,
}) {
  
  //Geri Sayım Sayacı
  useEffect(() => {
    const countInterval = setInterval(() => {
      if (count > 0) {
        setCount((prev) => prev - 1)
      } else {
        clearInterval(countInterval)
        console.log('clear')
        setStart(true)
      }
    }, 1000)
    return () => clearInterval(countInterval)
  }, [count])

  return (
    <>
      {hearth > 0 ? (
        <div
          className="w-100 h-100 text-center d-flex"
          style={{ flexDirection: 'column' }}
        >
          <div
            className="w-100 d-flex text-danger pt-2"
            style={{ justifyContent: 'space-between' }}
          >
            <div>
              <p className="">
                <IoIosHeartHalf
                  className="ms-2"
                  style={{ fontSize: '2.5rem' }}
                />
                <span className="fs-3">{hearth}</span>
              </p>
            </div>
            <div>
              <p className="fs-3 text-light">
                {name} {scor}
              </p>
            </div>
          </div>
          <div
            className="m-auto bg-light rounded shadow game-container"
            style={{ width: '800px', height: '700px' }}
          >
            {count === 0 ? (
              <div className="p-5">
                <h1 style={{ fontSize: '5rem' }}>{selectWord}</h1>
                <div
                  style={{
                    width: '600px',
                    height: '500px',
                    position: 'relative',
                  }}
                >
                  <button
                    className="btn btn-dark px-5 py-2 fs-5"
                    style={{
                      position: 'absolute',
                      left: position.x,
                      top: position.y,
                      letterSpacing: '0.1rem',
                    }}
                    onClick={decreaseHearth}
                  >
                    {selectWord}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center h-100 w-100 d-flex">
                <p className="text-dark m-auto" style={{ fontSize: '7rem' }}>
                  {count}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <main
          className="container d-flex pb-5"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <GameOver scor={scor} name={name} />
          <div style={{ height: '20rem' }}>
            <button
              className="mb-5 btn btn-success"
              style={{ letterSpacing: '0.1rem' }}
            >
              Tekrar Oyna
            </button>
          </div>
        </main>
      )}
    </>
  )
}

export default GamePage
