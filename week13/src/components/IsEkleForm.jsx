import React, { useState } from 'react'

function IsEkleForm({vekilFonksiyon}) {
  const [yeniIsAdi, setYeniIsAdi] = useState('')

  function formGonder(olay) {
    olay.preventDefault()
    vekilFonksiyon({ type: 'EKLE', title: yeniIsAdi })
    setYeniIsAdi('')
  }
  return (
    <>
      <form className="input-group mb-3" onSubmit={(olay) => formGonder(olay)}>
        <input
          type="text"
          placeholder="İş Adı Yaz"
          className="form-control form-control-sm"
          value={yeniIsAdi}
          onChange={(olay) => setYeniIsAdi(olay.target.value)}
        />
        <button className="btn btn-success btn-sm" type="submit">
          <i className="bi bi-plus-circle-dotted me-1"></i>EKLE
        </button>
      </form>
    </>
  )
}

export default IsEkleForm
