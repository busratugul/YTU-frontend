import React from 'react'
import useVeriCek from '../hooks/useVeriCek'

function Kullanicilar() {
  const kullaniciVeri = useVeriCek('https://jsonplaceholder.org/users')

  if (kullaniciVeri.hata !== '') {
    return <p>hata: {kullaniciVeri.hata}</p>
  }

  if (kullaniciVeri.yukleniyor === true) {
    return <p>YUKLENIYOR</p>
  }
  return <p>Toplam Kullanıcı: {kullaniciVeri.veri.length}</p>
}

export default Kullanicilar
