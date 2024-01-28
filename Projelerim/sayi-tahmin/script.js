//14 ocak 2024 Pazar

const eklenecekSayi = sayiSec()
const ad = prompt('Adın nedir?')
alert('Oyun Başlıyor 📢')
alert('Aklından bir sayı tut')
alert('Sayıyı 2 ile çarp')
alert(`Çıkan sonuca ${eklenecekSayi} ekle`)
alert('Çıkan sonucu 2ye böl')
alert('Sonuçtan ilk başta tuttuğun sayıyı çıkar')
alert(`Cevap ${eklenecekSayi / 2}😀`)
alert(`Güle güle ${ad}`)
function sayiSec() {
  //fonksiyon 2,4,6,8 sayılarından birisini üretir
  //sayı dizisini oluştur
  const nums = [2, 4, 6, 8]
  //Rastgele bir sayı seç
  const randomIndex = Math.floor(Math.random() * nums.length)
  //Seçilen sayıyı döndür
  return nums[randomIndex]
}
//eklettiğiniz sayının yarısı cevaptır. 8 eklesek 4 cevap
//<dialog> ile alert gibi daha özel açılır kapanır ekranlar yapabiliriz.
//js kodu derlerken 2 fazda derler 1.faz koda hızlıca bakar fonksiyonları yukarı taşır gibi düşünebiliriz 2.fazda da kodları sıra sıra çalıştırır.
