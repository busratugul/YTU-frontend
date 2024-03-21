import React, { useEffect } from 'react'

function GamePage({ count, setCount }) {
  useEffect(() => {
    const countInterval = setInterval(() => {
      if (count > 0) {
        setCount((prev) => prev - 1)
      } else {
        clearInterval(countInterval)
        console.log('clear')
      }
    }, 1000)
    return () => clearInterval(countInterval)
  }, [count])

  

  return (
    <div className="w-100 h-100 text-center d-flex">
      <div
        className="m-auto bg-light rounded shadow"
        style={{ width: '80%', height: '80%' }}
      >
        {count === 0 ? (
          <div className='w-100 h-100'>

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
  )
}

export default GamePage
