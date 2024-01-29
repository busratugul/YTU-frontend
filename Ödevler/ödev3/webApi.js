/* API: Application Programming Interface- uygulama programlama arabirimi 
Tvyi yönettiğimiz kumanda gibi düşünebiliriz her tuşun ayrı bir görevi var.Buradaki kumanda Interface'e denk geliyor.Kumanda üzerindeki her tuş jsdeki her fonksiyon, nesnelere denk geliyor.Tarayıcının veya işletim sisteminin kullanılan yazılım diline sunduğu listeler API Listesini oluşturuyor.Bazen de bu listeler gruplandırılır. Mesela js de dom üzerinde işlem yapmaya sağlayan nesneler dom apisi diye geçiyor.

sık kullanılan api türleri : web api mdn veya whatwebcando.today
*/

//FullScreen API ziyaretçinin sayfasını veya herhangi bir elementi bizim sayfamızdayken tam ekran yapabiliyoruz. Tam ekran yap gibi bir buton koyup tıklandığında tam ekran yapıp sonra exit butonu ile tam ekrandan cıkabiliriz.

let buton = document.querySelector('#btn-1')
let buton2 = document.querySelector('#btn-2')
buton.addEventListener('click', function () {
  //let html = document.querySelector("html") ikisi de aynı işlem htmli seçer
  let html = document.documentElement
  html.requestFullscreen()
  //buton2.classList.remove("gizle")
})

buton2.addEventListener('click', function () {
  document.exitFullscreen()
  //buton2.classList.add("gizle")
})

document.addEventListener('fullscreenchange', function () {
  buton2.classList.toggle('gizle')
})

//GEOLOCATION API navigator nesnesinin altından erişiliyor.
window.addEventListener('load', function () {
  this.navigator.geolocation.getCurrentPosition(function (konum) {
    let pr = document.createElement('p')
    pr.innerHTML = konum.coords.latitude + ' - ' + konum.coords.longitude
    document.querySelector('body').appendChild(pr)
  })
})
