const ogrenciler = ['Hasan Tokatlı', 'Ahmet Yılmaz', 'Büşra Tuğul']

const ogrencilerDetay = [
  { ad: 'Hasan Tokatlı', kurs: 'JS', devamsizlik: 0 },
  { ad: 'Ahmet Yılmaz', kurs: 'JS', devamsizlik: 2 },
  { ad: 'Büşra Tuğul', kurs: 'JS', devamsizlik: 1 },
]

//ELEMAN ÇEKME - VERİ OKUMA
//basit array
//console.log(ogrenciler[2])
//console.log(ogrencilerDetay[2].kurs)

//obje elemanlı array
/* ogrenciler.forEach((eleman, index) => {
  console.log(eleman, index)
}) */
/* ogrencilerDetay.forEach((eleman, index) => {
    console.log(eleman.ad,eleman.kurs, index)
  }) */

//ELEMAN EKLEME- VERİ EKLEME
//basit arraye sona eleman ekleme
/* ogrenciler.push('Nil Ece Altuğ')
console.log(ogrenciler) */

//obje elemanlı arraye sona eleman ekleme
/* ogrencilerDetay.push({ ad: 'Tarkan', kurs: 'JS', devamsizlik: 1 })
console.log(ogrencilerDetay) */

//ELEMAN SİLME- VERİ SİLME
//basit arrayden sondan veri silme
/* ogrenciler.pop()
console.log(ogrenciler)
ogrenciler.shift()
console.log(ogrenciler) */
/* ogrenciler.splice(1,1) //eğer istersek 3.parametre olarak yerine koymak istediğimiz stringi veririz.
console.log(ogrenciler) */

//basit arrayden koşullu tek veri silme
/* const silinecekIndex = ogrenciler.findIndex( //bulduğu ilk elemanın indexini döner ancak findLastIndex() sondan buldugunu döner
  (eleman) => eleman === 'Hasan Tokatlı'
) //index ya da -1
console.log(silinecekIndex)

if (silinecekIndex !== -1) ogrenciler.splice(silinecekIndex, 1) //orjinal listeyi değiştirir.
console.log(ogrenciler) */

//obje içeren arrayden koşullu tek veri silme
/* const silinecekIndex = ogrencilerDetay.findIndex(eleman => eleman.ad === "Hasan Tokatlı")
if(silinecekIndex !== -1) ogrencilerDetay.splice(silinecekIndex,1)
console.log(ogrencilerDetay) */

//ELEMAN SİLME- VERİ GÜNCELLEME
//basit arrayden sondan veri güncelleme 
//splice(nereye ekliceğimiz, değişecek eleman veya elemanlar , ne ekleyeceğimiz)
/* ogrenciler.splice(1,0, "Doruk Akgün")
console.log(ogrenciler) */
console.log(ogrencilerDetay)
//obje içeren arrayden koşullu tek veri güncelleme
ogrencilerDetay.splice(2,1,{...ogrencilerDetay[2], ad: "Tarkan"})
//ogrencilerDetay.splice(2,1,{...ogrencilerDetay[2], ad: "Tarkan", kurs: "HTML", devamsizlik:1})
console.log(ogrencilerDetay)