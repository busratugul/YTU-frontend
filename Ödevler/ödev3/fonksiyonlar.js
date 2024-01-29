//FONKSİYONLAR her fonksiyon uygulamada bir görevi yerine getirir. Fonksiyonlar yine süslü parantezlerle blok oluşturarak kullanılır ve çalışması için invoke edilmesi çağırılması gerekir.

//genel-klasik fonksiyon tanımı
function merhabaYazdir() {
  console.log('Merhaba!!!')
}

merhabaYazdir()

// const merhabaYazdir = function(){ console.log("Merhaba")} Ancak bu pek tercih edilmiyor.Hosting işleminde de eğer bu fonksiyon tipi çağırıldığı yerden sonra tanımlandıysa hata verir.

//Arrow Function ES6
//tek komut varsa süslülere gerek yok tek komut değilse => {} kullanılır.
const sayHello = () => console.log('Hello')

//fonksiyonları istediğimiz yerde tanımlayıp, istediğimiz yerde çağırabiliriz.Js scripti baştan sona hızlıca tarar ve hoisting tekniği kullanır. Bu taramada fonksiyonları yukarı taşır ve ikinci taramada satır satır çalıştırır (execution aşaması).

function tutarHesapla(adet, fiyat, KDV = 0.08) {
  //fonksiyonların dinamik hale gelmesi için parametre kullanılır.Parametre parantez içine yazılın, isimlere verilen adlardır.
  let siparisAdet = adet
  let birimFiyat = fiyat
  //const KDV = 0.08

  let KDVsizTutar = siparisAdet * birimFiyat
  let KDVliTutar = KDVsizTutar + KDVsizTutar * KDV
  console.log('KDVsiz TUTAR: ' + KDVsizTutar)
  console.log('KDVli TUTAR: ' + KDVliTutar)
}

tutarHesapla(5, 40)
//parametre gönderilmediğinde varsayılanları kullanması için parametre içine değere atama yapılır.Eğer parametre olmazsa varsayılanı kullanır ama parametre olursa gönderileni kullanır.
tutarHesapla(2, 60, 0.88)

//GERİYE DEĞER DÖNDÜRME - RETURN
//Fonksiyonlarda console.log, popup, bir yere mesaj gönderen özellik yoksa genellikle fonksiyonlardan değer almak isteriz.Bu gibi durumlarda eğer return kullanmazsak fonksiyonlar geriye undefined döndürür.returnden sonra ne göndermek istiyorsak onu yazarız.
function ucgenAlan(taban, yukseklik) {
  let alan = (taban * yukseklik) / 2
  return alan
}
console.log(`üçgenin alanı: ${ucgenAlan(20, 30)}`)
/* let sonuc = ucgenAlan(20, 30) 
console.log(sonuc)   output: UNDEFINED */
