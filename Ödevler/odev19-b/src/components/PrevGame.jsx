import React from 'react'

function PrevGame({ setStart }) {
  return (
    <main>
      <div
        className="mx-auto bg-light rounded shadow mt-2"
        style={{
          width: '800px',
          height: '300px',
          opacity: '0.8',
        }}
      >
        <div className="p-5 text-center">
          <h1 style={{ fontSize: '3rem' }}>
            Deve ise deveye, cüce ise cüceye en kısa sürede bas. Unutma pratik
            olan kazanır.
          </h1>
          <div
            style={{
              width: '600px',
              height: '500px',
              position: 'relative',
            }}
          >
            <button
              className="btn py-2 fs-5  text-light 
                bg-success"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                letterSpacing: '0.1rem',
              }}
              onClick={() => setStart(true)}
            >
              BAŞLA
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PrevGame
