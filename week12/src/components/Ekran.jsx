import React from 'react'
import useResize from '../hooks/useResize'

function Ekran() {
  const ekranBilgi = useResize()

  if (ekranBilgi[0] < 700)
    return (
      <p style={{ color: 'red' }}>
        Uygulamayı en az 500px genişlikte görüntüleyebilirsiniz.
      </p>
    )
  return (
    <div>
      <p>
        <strong>GENİŞLİK: {ekranBilgi[0]}</strong>
      </p>
      <br />
      <p>
        <strong>YÜKSEKLİK: {ekranBilgi[1]}</strong>
      </p>
    </div>
  )
}

export default Ekran
