//7 ocak 2024 pazar
//TEMA DEĞİŞTİRME KODLARI
const buton1 = document.querySelector('#buton1')
buton1.addEventListener('click', () => {
  TemaDegistir('lightyellow', 'orange')
})

const buton2 = document.querySelector('#buton2')
buton2.addEventListener('click', () => {
  TemaDegistir('lightgreen', 'gray')
})

const temizle = document.querySelector('#buton3')
temizle.addEventListener('click', () => {
  TemaDegistir('', '')
})

function TemaDegistir(arkaPlan, renk) {
  document.body.style.backgroundColor = arkaPlan
  document.body.style.color = renk
}

//YAZI BÜYÜLTME KODLARI
const buton3 = document.querySelector('#yazi-buyult')
const buton4 = document.querySelector('#yazi-kucult')

buton3.addEventListener('click', () => {
  yaziBuyut()
})
buton4.addEventListener('click', () => {
  yaziKucult()
})

function yaziBuyut() {
  const html = document.querySelector('html')
  const mevcutBoyut = parseInt(getComputedStyle(html).fontSize)
  html.style.fontSize = `${mevcutBoyut + 5}px`
}

function yaziKucult() {
  const html = document.querySelector('html')
  const mevcutBoyut = parseInt(getComputedStyle(html).fontSize)
  html.style.fontSize = `${mevcutBoyut - 5}px`
}
/* const h1Basliklari = document.querySelectorAll('h1') //Çoklu eleman seçimi
  const h2Basliklari = document.querySelectorAll('h2')

  h1Basliklari.forEach((baslik) => {
    let baslikYaziBoyutu = getComputedStyle(baslik).fontSize
    baslik.style.fontSize = `${parseInt(baslikYaziBoyutu) + 5}px`
  })

  h2Basliklari.forEach((baslik) => {
    let baslikYaziBoyutu = getComputedStyle(baslik).fontSize
    baslik.style.fontSize = `${parseInt(baslikYaziBoyutu) + 5}px`
  })
}

function yaziKucult() {
  const h1Basliklari = document.querySelectorAll('h1')
  const h2Basliklari = document.querySelectorAll('h2')
  h1Basliklari.forEach((baslik) => {
    let baslikYaziBoyutu = getComputedStyle(baslik).fontSize
    baslik.style.fontSize = `${parseInt(baslikYaziBoyutu) - 5}px`
  })

  h2Basliklari.forEach((baslik) => {
    let baslikYaziBoyutu = getComputedStyle(baslik).fontSize
    baslik.style.fontSize = `${parseInt(baslikYaziBoyutu) - 5}px`
  }) */
