import { v4 as uuid } from 'uuid'

const ilkYapilacaklarListesi = {
  veri: [
    {
      id: uuid(),
      title: 'Yumurta alınacak (organik kırda gezen tavuk)',
      complete: false,
    },

    {
      id: uuid(),
      title: 'Ekmek alınacak (ramazan pidesi)',
      complete: true,
    },
  ],
  tamamlanan: 0,
}
function tamamlananSayisi(veri) {
  return veri.filter((is) => is.complete === true).length
}

const isKucultucu = (state, aksiyon) => {
  switch (aksiyon.type) {
    case 'TAMAMLANDI':
      const tamamlandiVeri = state.veri.map((todo) => {
        if (todo.id === aksiyon.id) {
          return { ...todo, complete: !todo.complete }
        } else {
          return todo
        }
      })
      const yeniState = { ...state, veri: tamamlandiVeri }
      return { ...yeniState, tamamlanan: tamamlananSayisi(yeniState.veri) }

    case 'SİL':
      const silindiVeri = state.veri.filter((todo) => {
        if (todo.id !== aksiyon.id) {
          return todo
        }
      })
      return { ...state, veri: silindiVeri }

    case 'EKLE':
      const yeniIs = { id: uuid(), title: aksiyon.title, complete: false }
      return { ...state, veri: [...state.veri, yeniIs] }
    /*   const enBuyukIs =
        state.reduce((max, is) => {
          return is.id > max.id ? is : max
        }, state[0])
      return [...state, { id: enBuyukIs.id + 1, title: aksiyon.title, complete: false }]
      veya 
      const yeniId = state.reduce((max, is) => {
                    return Math.max(max, is.id)
                }
            ,0) + 1;

Bu da çözüm üretiyor hocam. Math.max*/

    default:
      return state
  }
}

export { ilkYapilacaklarListesi, isKucultucu }
