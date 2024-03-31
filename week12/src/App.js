import React, {useState} from 'react'
import C1 from './components/C1'

function App() {
    const [sayac, setSayac] = useState(0)

    const deger = sayac % 5 === 0 ?sayac :"5in katı değil"
  return (
    <div>
        Merhaba.. Sayaç: {sayac} 
        <button onClick={() => setSayac(prev => prev + 1)}>Arttır</button>
        <C1 veri={deger}/>
    </div>
  )
}

export default App