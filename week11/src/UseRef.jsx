import React, { useState, useRef } from 'react'

function UseRef() {
  const [sayac, setSayac] = useState(0)

  const puan = useRef(0)

  function puanGuncelle() {
    puan.current += 10
  }

  return (
    <div>
      PUAN : {puan.current}
      <div>
        SAYAC : {sayac}
        <button onClick={() => setSayac((prev) => prev + 5)}>
          Sayaç Arttır
        </button>
        <div>
          <button onClick={puanGuncelle}>Ref Değeri Güncelle</button>
        </div>
      </div>
    </div>
  )
}

export default UseRef
