import React, { useReducer } from 'react'
import { ilkYapilacaklarListesi, isKucultucu } from '../reducers/isKucultucu'
import IsListe from './IsListe'
import IsEkleForm from './IsEkleForm'

function App() {
  const [yapilacaklar, vekilFonksiyon] = useReducer(
    isKucultucu,
    ilkYapilacaklarListesi
  )
  const tamamlananSayisi = yapilacaklar.veri.filter( is=>is.complete === true ).length

  return (
    <>
      <section className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <h1 className="h3 text-center">Yapılacaklar Listesi</h1>
            <IsEkleForm vekilFonksiyon={vekilFonksiyon} />

            <IsListe
              yapilacaklar={yapilacaklar}
              vekilFonksiyon={vekilFonksiyon}
            />

            <p>Toplam: {tamamlananSayisi + "/" + yapilacaklar.veri.length}</p>
           
          
          </div>
        </div>
      </section>
    </>
  )
}

export default App
