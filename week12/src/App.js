import React, {useState, useCallback} from 'react'
import C1 from './components/C1'

function App() {
    const [sayac, setSayac] = useState(1)

    const deger = sayac % 5 === 0 ?sayac :"5in katı değil"

    const uyariGoster = useCallback(function (uyari) {
        alert(uyari + sayac)
    },[])

  return (
    <div>
        Merhaba.. Sayaç: {sayac} 
        <button onClick={() => setSayac(prev => prev + 1)}>Arttır</button>
        <C1 veri={deger} f1={uyariGoster}/>
    </div>
  )
}

export default App