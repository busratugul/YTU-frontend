import React, { useState, useEffect } from 'react'

function App() {
  //const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.org/users')
      const jsObjectData = await response.json()
      setData(jsObjectData)
      //setLoading(false)
    }

    setTimeout(fetchData, 2000)
  }, [])
  console.log(data)
  return (
    <>
      {/*  {loading && <h1>Loading...</h1> } */}
      {data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        data.map((kisi, idx) => {
          return (
            <p key={idx}>
              {' '}
              {kisi.firstname} {kisi.lastname}{' '}
            </p>
          )
        })
      )}
    </>
  )
}

export default App
