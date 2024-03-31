import React from 'react'
import useLocalStorage from './hooks/useLocalStorage'

function Sayac() {
  /*  const [sayac, setSayac] = useState(+localStorage.getItem('SAYAC'))

  useEffect(() => {
    localStorage.setItem('SAYAC', sayac)
  }, [sayac]) */

  const [suankiDeger, degeriGuncelle] = useLocalStorage('SAYAC', 0)
  const [kullanicilar, kullanicilariGuncelle] = useLocalStorage('USER', [
    { id: 1, ad: 'AHMET' },
  ])

  return (
    <div>
      <h4>sayac {suankiDeger}</h4>
      <button onClick={() => degeriGuncelle((prev) => prev + 5)}>
        Arttır +5
      </button>
      <hr />
      <div>
        <input type="text" value={''} />
        <button
          onClick={() =>
            kullanicilariGuncelle([...kullanicilar, { id: 3, ad: 'EDA' }])
          }
        >
          ekle
        </button>
      </div>
      <div>
        {kullanicilar.map((kullanici) => {
          return <li key={kullanici.id}>{kullanici.ad}</li>
        })}
      </div>
    </div>
  )
}

export default Sayac
