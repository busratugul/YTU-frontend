import React, { useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import GameOver from './GameOver'
import PrevGame from './PrevGame'

function GamePage({
  isName,
  randomWord,
  position1,
  position2,
  name,
  heart,
  scor,
  start,
  setStart,
  correctBtn,
  wrongBtn,
  refreshPage,
  isClicked,
  disabled
}) {

  return (
    <>
      {heart > 0 ? (
        <>
          {isName && (
            <div className="container">
              <div
                className="w-100 d-flex text-danger pt-2 mt-5"
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
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
              {!start ? (
                <PrevGame setStart={setStart} />
              ) : (
                <div
                  className="w-100 h-100 text-center d-flex"
                  style={{ flexDirection: 'column' }}
                >
                  <div
                    className="mx-auto bg-light rounded shadow game-container mt-2"
                    style={{
                      width: '800px',
                      height: '700px',
                    }}
                  >
                    <h1 className="mt-5" style={{ fontSize: '3rem' }}>
                      {randomWord}
                    </h1>
                    <div
                      style={{
                        width: '600px',
                        height: '500px',
                        position: 'relative',
                      }}
                    >
                      <button
                        className="btn py-2 fs-5  text-light bg-dark btnClick"
                        style={{
                          position: 'absolute',
                          left: position1.x,
                          top: position1.y,
                          letterSpacing: '0.1rem',
                          width: '9rem',
                        }}
                        onClick={(e) =>
                          e.target.innerText === randomWord
                            ? correctBtn()
                            : wrongBtn()
                        }
                        disabled={disabled}
                       
                      >
                        DEVE
                      </button>

                      <button
                        className={'btn px-5 py-2 fs-5 text-light bg-dark btnClick'}
                        style={{
                          position: 'absolute',
                          left: position2.x,
                          top: position2.y,
                          letterSpacing: '0.1rem',
                        }}
                        onClick={(e) =>
                          e.target.innerText === randomWord
                            ? correctBtn()
                            : wrongBtn()
                        }
                        disabled={disabled}
                      
                      >
                        CÜCE
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <main
        className="container d-flex pb-5"
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <GameOver scor={scor} name={name}/>
        <div style={{ height: '20rem' }}>
          <button
            className="mb-5 btn btn-success"
            style={{ letterSpacing: '0.1rem' }}
            onClick={refreshPage}
            
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
