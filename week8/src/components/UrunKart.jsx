import React from 'react'

function UrunKart({ urunBilgi }) {

  console.log(urunBilgi?.baslik)
  function uyariVer(mesaj) {
    alert(mesaj)
  }

  return urunBilgi ? (
    <div className="col-12 col-md-3">
      <h3>{urunBilgi.baslik ? urunBilgi.baslik : 'Başlık Yok..'}</h3>
      <img onClick={() => uyariVer("Hello" + urunBilgi.baslik)} src={`https://lipsum.app/id/${urunBilgi.fotoNo}/300x200`} alt="" />
    </div>
  ) : (
    ''
  )
}

export default UrunKart
