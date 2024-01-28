const ogrenciler = [
  'Hasan Tokatlı',
  'Ahmet Yılmaz',
  'Büşra Tuğul',
  'Çağrı Akgün',
]

const ogrencilerDetay = [
  { ad: 'Hasan Tokatlı', kurs: 'JS', devamsizlik: 0 },
  { ad: 'Ahmet Yılmaz', kurs: 'JS', devamsizlik: 2 },
  { ad: 'Büşra Tuğul', kurs: 'JS', devamsizlik: 1 },
  {ad: 'Çağrı Akgün', kurs: 'CSS', devamsizlik: 3 }
]
console.log(ogrencilerDetay)

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
/* ogrenciler.splice(3,2, ["Doruk Akgün", "tarkan"])
console.log(ogrenciler) 
console.log(ogrencilerDetay) */
//obje içeren arrayden koşullu tek veri güncelleme
/* ogrencilerDetay.splice(2,1,{...ogrencilerDetay[2], ad: "Tarkan"}) */
//ogrencilerDetay.splice(2,1,{...ogrencilerDetay[2], ad: "Tarkan", kurs: "HTML", devamsizlik:1})
/* console.log(ogrencilerDetay) */

//WEEK4

//eğer slice ile birden çok eleman güncellemek istersen virgülden sonra yeni değerleri bir array içinde vermemiz gerekmektedir. ogrenciler.splice(3,2, ["Doruk Akgün", "tarkan"]) slice geriye silinenleri bir array olarak döndürür yakalayabiliriz.
//orjinal listeyi değiştirmeye muted etmek mutasyona uğratmak denir.filter da orjinal listeyi değiştirmez. Bu zamana kadar yaptıklarımız muteddi.

//BASİT ARRAY FİLTRELEME
/* const isimFiltreArray = ogrenciler.filter((eleman) => {
  return eleman.toLowerCase().includes('hasan')
})
//tolocallowercase pcnin diline bakarak arama yapar

console.log(isimFiltreArray)
console.log(ogrenciler)

//obje içeren array filtreleme
const devamsizlikOlmayanOgrenciler = ogrencilerDetay.filter(
  (eleman) => eleman.devamsizlik === 0
)
console.log(devamsizlikOlmayanOgrenciler) */


//ARRAY SIRALAMA sort() orjinal diziyi değiştirir. muteddir. Önce dizinin bir kopyasını al
//basit array sıralama

/* ogrenciler.sort()
console.log(ogrenciler)

ogrenciler.sort((a,z) => z.localeCompare(a, "tr-TR")) //zden aya
ogrenciler.sort((a,z) => a.localeCompare(z, "tr-TR")) //adan zye
console.log(ogrenciler)
 */
//localeCompare() sıralamasını yaparken açıklamasında yazdığı gibi verilen dilin BCP 47 standardlarına uygun olması gerekir.googlela.Mesela türkçe tr-TR olarak yazılır. Ve bu localeCompareye ikinci parametre olarak bunu verirsek garantiye almış oluruz.

//obje içeren arraylerde sıralama
ogrencilerDetay.sort((ilkObje,ikinciObje) => ilkObje.ad.localeCompare(ikinciObje.ad, "tr-TR"))
console.log(ogrencilerDetay)
console.log(ogrencilerDetay)
console.log(ogrenciler)

ogrencilerDetay.sort((ilkObje,ikinciObje) => ilkObje.devamsizlik-ikinciObje.devamsizlik)
console.log(ogrencilerDetay)

const yeni = ogrencilerDetay.sort((ilkObje,ikinciObje) => ilkObje.devamsizlik-ikinciObje.devamsizlik)
console.log(yeni)
console.log(ogrencilerDetay)