const eklenecekSayilar = [2, 4, 6, 8]
const eklenecekSayi = eklenecekSayilar[rastgeleSayi(0, 3)]
let ad = ''
const oyunAlaniEleman = document.querySelector('#oyun-alani')

ekran1Goster()

function ekran1Goster() {
  const adInputElemani = document.createElement('input')
  adInputElemani.placeholder = 'Adın nedir?'
  oyunAlaniEleman.append(adInputElemani)

  adInputElemani.addEventListener('keypress', (olay) => {
    if (olay.key === 'Enter') {
      //js klavye event tuşları
      olay.preventDefault() //form elemanları ile çalışınca
      ad = olay.currentTarget.value //input referansı
      ekran2Goster()
    }
  })
}

function ekran2Goster() {
  oyunAlaniEleman.innerHTML = '' //ana div içindeki alanı temizle

  const pEleman = document.createElement('p')
  pEleman.textContent = 'Aklından bir sayı tut'
  oyunAlaniEleman.append(pEleman)

  const butonEleman = document.createElement('button')
  butonEleman.textContent = 'Devam ➡️'
  oyunAlaniEleman.append(butonEleman)

  butonEleman.addEventListener('click', () => {
    ekran3Goster()
  })
}

function ekran3Goster() {
  oyunAlaniEleman.innerHTML = ''

  const pEleman = document.createElement('p')
  pEleman.textContent = 'Sayıyı 2 ile çarp'
  oyunAlaniEleman.append(pEleman)

  const butonEleman = document.createElement('button')
  butonEleman.textContent = 'Devam ➡️'
  oyunAlaniEleman.append(butonEleman)

  butonEleman.addEventListener('click', () => {
    ekran4Goster()
  })
}

function ekran4Goster() {
  oyunAlaniEleman.innerHTML = ''

  const pEleman = document.createElement('p')
  pEleman.textContent = `Çıkan sonuca ${eklenecekSayi} ekle.`
  oyunAlaniEleman.append(pEleman)

  const butonEleman = document.createElement('button')
  butonEleman.textContent = 'Devam ➡️'
  oyunAlaniEleman.append(butonEleman)

  butonEleman.addEventListener('click', () => {
    ekran5Goster()
  })
}

function ekran5Goster() {
  oyunAlaniEleman.innerHTML = ''

  const pEleman = document.createElement('p')
  pEleman.textContent = "Sonucu 2'ye böl"
  oyunAlaniEleman.append(pEleman)

  const butonEleman = document.createElement('button')
  butonEleman.textContent = 'Devam ➡️'
  oyunAlaniEleman.append(butonEleman)

  butonEleman.addEventListener('click', () => {
    ekran6Goster()
  })
}

function ekran6Goster() {
  oyunAlaniEleman.innerHTML = ''

  const pEleman = document.createElement('p')
  pEleman.textContent = 'Sonuçtan ilk başta tuttuğun sayıyı çıkar'
  oyunAlaniEleman.append(pEleman)

  const butonEleman = document.createElement('button')
  butonEleman.textContent = 'Devam ➡️'
  oyunAlaniEleman.append(butonEleman)

  butonEleman.addEventListener('click', () => {
    ekran7Goster()
  })
}

function ekran7Goster() {
  oyunAlaniEleman.innerHTML = ''

  const pEleman = document.createElement('p')
  pEleman.textContent = `Cevap ${eklenecekSayi / 2} 😎`
  oyunAlaniEleman.append(pEleman)

  const butonEleman = document.createElement('button')
  butonEleman.textContent = 'Oyunu Bitir ➡️'
  oyunAlaniEleman.append(butonEleman)

  butonEleman.addEventListener('click', () => {
    ekran8Goster()
  })
}

function ekran8Goster() {
  oyunAlaniEleman.innerHTML = ''

  const pEleman = document.createElement('p')
  pEleman.textContent = `Güle güle ${ad} 👋🏻👋🏻`
  oyunAlaniEleman.append(pEleman)
}

//UTILITY FUNCTION işe yarayacak basit fonksiyonlar
function rastgeleSayi(min, max) {
  /* tam sayı verilecekse buna gerek yok ama ondalık verilirse bu kodlar tam sayıya çevirir.
    min = Math.ceil(min)
    max = Math.floor(max) */
  return Math.floor(Math.random() * (max - min + 1) + 1)
}

//neden global functionlarda normal function ama bir içte arrow
//innertext ve textcontent farkı ne
