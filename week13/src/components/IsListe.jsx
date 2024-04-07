import React from 'react'

function IsListe({ yapilacaklar, vekilFonksiyon }) {
  const tamamlandiYap = (is) => {
    vekilFonksiyon({ type: 'TAMAMLANDI', id: is.id })
  }

  const isiSil = (is, olay) => {
    olay.preventDefault()
    vekilFonksiyon({ type: 'SİL', id: is.id })
  }
  return (
    <>
      {yapilacaklar.veri.map((is) => (
        <div key={is.id} className="d-flex justify-content-between mb-2">
          <label className="d-flex gap-2">
            <input
              type="checkbox"
              checked={is.complete}
              onChange={() => tamamlandiYap(is)}
            />
            {is.title}
          </label>

          <a className="text-danger" onClick={(olay) => isiSil(is, olay)}>
            <i className="bi bi-trash"></i>
          </a>
        </div>
      ))}
    </>
  )
}

export default IsListe
