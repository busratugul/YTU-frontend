/* OBJECTS
Primitive(basit) veri tiplerinde sadece tek bir bilgi saklanır. Objeler ise complex veri tipindedir. İçinde birden çok değer saklayabilir.
*/

//let siparis1 = "3 30 Koza Mah. Ahmet Yılmaz" içbilgilere erişemiyoruz.
//let siparis2 = "5 15 Ceylan Mah. Derya Yalın"

let siparis1 = {
  siparisAdet: 3,
  urunFiyati: 30,
  adres: 'Koza Mah.',
  musteri: 'Ahmet Yılmaz',
}

let siparis2 = {
  siparisAdet: 5,
  urunFiyati: 15,
  adres: 'Ceylan Mah.',
  musteri: ' Derya Yalın',
  //objelerin içinde numeric, metinsel değerler koyabildiğimiz gibi fonksiyon da koyabiliyoruz.
  tutarHesapla: function () {
    return this.siparisAdet * this.urunFiyati
  },
  //Eğer bir fonksiyon bir obje içinde tanımlıysa o fonksiyonlara özel olarak method nedir. Method: obje içinde tanımlı olan fonksiyonlardır.mesela console nesnesinin log() methodunu sürekli kullanıyoruz. (js predefined objects)
}

//Math objesinin max() methodu
console.log(Math.max(25, 36, 999, 87, 65)) //arraylerde verilebilir.

//obje içindeki özelliklere(property) nokta veya köşeli parantez içinde  ile erişilebilir.
console.log(siparis1.musteri)
console.log(siparis2['musteri'])
console.log(siparis2.tutarHesapla()) //fonksiyonu çağırma
