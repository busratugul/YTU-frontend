import React, { useState } from 'react'
import GlobalContext from './contexts/GlobalContext'
import C1 from './components/C1'

function App() {
  const [kullanici, kullaniciGuncelle] = useState('Orhan Gencebay')

  return (
    <GlobalContext.Provider value={kullanici}>
      <C1 />
    </GlobalContext.Provider>
  )
}

export default App
