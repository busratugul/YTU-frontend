import React, { useState } from 'react'

function KisiEkle() {
  const [yeniAd, setAd] = useState('')
  const [yeniTel, setTel] = useState('')

  function kisiEkle() {
    const yeniKisi = { ad: yeniAd, tel: yeniTel }

  //1 localstoragedan veri çek
  const rehberVeri = localStorage.getItem('rehberJSON')
  let rehberArray = JSON.parse(rehberVeri)

  //1-b en büyük idnin 1 fazlası
 

  //2 js arraye yeni kişiyi push yap
  rehberArray.push(yeniKisi)

  //3 js arrayi jsona dönüştür
  const yeniRehberJSON = JSON.stringify(rehberArray)

  //4 jsonı localstorageea ekle
  localStorage.setItem('rehberJSON', yeniRehberJSON)

  setAd("")
  setTel("")
  }

  return (
    <div className="row mb-5">
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Ad Soyad"
          value={yeniAd}
          onChange={(e) => setAd(e.target.value)}
        />
      </div>
      <div className="col">
        <input
          type="tel"
          className="form-control"
          placeholder="Telefon"
          value={yeniTel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>
      <div className="col-2">
        <button onClick={kisiEkle} className="btn btn-success">
          Ekle
        </button>
      </div>
    </div>
  )
}

export default KisiEkle
