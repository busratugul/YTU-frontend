const API_URL = 'https://restcountries.com/v3.1/all'
const kokEleman = document.querySelector('#root')
const ulkeler = []

async function veriCek() {
    //loading html kodu eklenir
  const yanit = await fetch(API_URL)
  const veri = await yanit.json() //veri obje ve array olacaktır
  ulkeler.push(...veri)
  //console.log(veri)
  //console.log(ulkeler)

  //loading html kodu kaldırılabilir
  renderLayout()
}

function renderLayout() {
  const HTMLSablon = `
  <div class="ulkeler-header">
  <h1>Ülkeler</h1>
  <input type = "text" placeholder= "Arama ifadesi girin..."/>
  </div>
  `
  kokEleman.insertAdjacentHTML('beforeend', HTMLSablon)

  const kartKapsayici = document.createElement('div')
  kartKapsayici.classList.add('kart-kapsayici')
  kokEleman.append(kartKapsayici)

  renderUlkeler(kartKapsayici, ulkeler)
  eventKaydet()
}

function renderUlkeler(kartKapsayici, ulkeArray) {
  kartKapsayici.innerHTML = ''
  ulkeArray.forEach((ulke) => {
    const ulkeDiv = document.createElement('div')
    ulkeDiv.classList.add('ulke-kart')
    kartKapsayici.append(ulkeDiv)

    const ulkeGorsel = document.createElement('img')
    ulkeGorsel.src = ulke.flags.svg
    ulkeDiv.append(ulkeGorsel)
  })
}

function eventKaydet() {
  const inputEleman = document.querySelector('.ulkeler-header input')
  inputEleman.addEventListener('keyup', (olay) => {
    const filtrelenmisUlkeler = ulkeler.filter((ulke) => {
      let aranan = inputEleman.value.toLowerCase()
      let commonName = ulke.name.common.toLowerCase()
      let officialName = ulke.name.official.toLowerCase()
      return officialName.includes(aranan) || commonName.includes(aranan)
    })
    const kartKapsayici = document.querySelector('.kart-kapsayici')
    renderUlkeler(kartKapsayici, filtrelenmisUlkeler)
  })
}

veriCek()
