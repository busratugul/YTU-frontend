let ekranGenisligi = window.screen.width
let buyutme = devicePixelRatio
console.log(ekranGenisligi)
console.log(buyutme)

let gercekGenislik = ekranGenisligi * buyutme
console.log(`Gerçek çözünürlük ${gercekGenislik}`)

//location.href = "https://google.com";
//history.forward()

if (navigator.language === 'tr-TR') {
  location.href = 'sayfa2.html'
}

if (navigator.online === false) {
  window.alert(
    'Bu sayfa nın çalışması için internet bağlantısı gereklidir. /n Lütfen bağlantınızı kontrol edin.'
  ) //window methodu
}

/* let cevap = window.confirm("Kayıt Silinsin mi?") //ture ya da false döner
if(cevap === true){
    console.log("Kayıt silindi.")
}else {
    console.log("Kayıt silinmedi.")
} */

/* let cevap2 = prompt("Bir sayı giriniz") //eğer kullanıcı okeye basarsa string, iptale basarsa null veri tipi döner
if(parseInt(cevap2) % 2 === 0) {
    console.log("sayı çifttir")
}else {
    console.log("Sayı tektir.")
} */

/* function islemYap(){
    console.log("İşlemm gerçekleşti")
}
window.setTimeout(islemYap, 2000) */

setTimeout(function () {
  console.log('İşlemm gerçekleşti')
}, 3000) //bu tarz fonksiyonlara anonim func. denir böylelikle fonksiyon atamıyoruz

setInterval(function () {
  console.log('İşlem 2 gerçekleşti')
}, 2500)
