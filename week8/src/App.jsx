import React from 'react'
import UrunKart from './components/UrunKart'

function App() {
  return (
    <div>
        <h1>Ürün Listesi</h1>
        <UrunKart urunBilgi={{baslik: "Ürün Başlığı 1", fotoNo: 21}}/>
        <UrunKart urunBilgi={{baslik: "Ürün Başlığı 2", fotoNo: 22}}/>
        <UrunKart urunBilgi={{baslik: "Ürün Başlığı 3", fotoNo: 23}}/>
        <UrunKart urunBilgi={{baslik: "Ürün Başlığı 4", fotoNo: 24}}/>
    </div>
  )
}

export default App