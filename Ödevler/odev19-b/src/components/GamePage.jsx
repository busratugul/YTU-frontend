import React, { useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import GameOver from './GameOver'

function GamePage({
  position1,
  position2,
  selectWord,
  name,
  heart,
  decreaseHeart,
  scor,
  start,
  timer,
  over,
}) {

  return (
    <>
      {heart > 0 ? (
        <div
          className="w-100 h-100 text-center d-flex"
          style={{ flexDirection: 'column' }}
        >
          <div
            className="w-100 d-flex text-danger pt-2 mt-5"
            style={{ justifyContent: 'space-between' }}
          >
            <div>
              <p>
                <FaHeart className="ms-2" style={{ fontSize: '2.5rem' }} />
                <span className="fs-3">{heart}</span>
              </p>
            </div>
            <div>
              <p className="fs-3 text-light">
                {name} {scor}
              </p>
            </div>
          </div>
          <div
            className="mx-auto bg-light rounded shadow game-container mt-2"
            style={{
              width: '800px',
              height: selectWord === 'BAŞLA' ? '300px' : '700px',
              opacity: selectWord === 'BAŞLA' && '0.8 ',
            }}
          >
            {start && (
              <div className="p-5 text-center">
                <h1 style={{ fontSize: '3rem' }}>
                  {selectWord === 'BAŞLA'
                    ? 'Deve ise deveye, cüce ise cüceye en kısa sürede bas. Unutma pratik olan kazanır.'
                    : selectWord}
                </h1>
                <div
                  style={{
                    width: '600px',
                    height: '500px',
                    position: 'relative',
                  }}
                >
                  <button
                    className={`btn py-2 fs-5  text-light ${
                      selectWord === 'BAŞLA' ? 'bg-success' : 'bg-dark'
                    }`}
                    style={{
                      position: 'absolute',
                      left: position1.x,
                      top: position1.y,
                      letterSpacing: '0.1rem',
                    }}
                    onClick={decreaseHeart}
                  >
                    {selectWord === 'BAŞLA' ? 'BAŞLA' : 'DEVE'}
                  </button>

                  {selectWord !== 'BAŞLA' && (
                    <button
                      className={'btn px-5 py-2 fs-5 text-light bg-dark'}
                      style={{
                        position: 'absolute',
                        left: position2.x,
                        top: position2.y,
                        letterSpacing: '0.1rem',
                      }}
                      onClick={decreaseHeart}
                    >
                      CÜCE
                    </button>
                  )}
                </div>
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
