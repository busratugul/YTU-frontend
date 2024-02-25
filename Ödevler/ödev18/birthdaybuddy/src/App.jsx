import React from 'react'
import { useState } from 'react'
import { dataArray } from './components/Persons'

function App() {
  const [count, setCount] = useState(dataArray.length)

  const handleClick = () => {
    dataArray.splice(0, dataArray.length)
    setCount(0)

    const clearBtn = document.querySelector('#clearAllBtn')
    clearBtn.style.visibility = 'hidden'
  }

  return (
    <>
      <p className="title">{count} Birthdays Today</p>

      {dataArray.map((person, idx) => {
        return (
          <div className="card" key={idx}>
            <img src={person.image} />
            <div>
              <h5>{person.name}</h5>
              <p>{person.age} years</p>
            </div>
          </div>
        )
      })}

      <button id="clearAllBtn" onClick={handleClick}>
        Clear All
      </button>
    </>
  )
}

export default App
