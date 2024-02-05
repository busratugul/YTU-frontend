const modlar = [
  'beach',
  'birds',
  'cafe',
  'campfire',
  'city',
  'fireplace',
  'forest',
  'heavy-rain',
  'night-crickets',
  'rain-camping',
  'rain',
  'rain-windshield',
  'snow',
  'thunder',
  'train',
]
//console.log(modlar.length)

let calanModlar = []

const kokEleman = document.querySelector('#root')
const bilgiEleman = document.querySelector('#bilgi')

//UI RENDER EDEN FONKSIYON
function renderKartlar() {
  kokEleman.innerHTML = ''

  modlar.forEach((eleman) => {
    const HTMLSablonu = `
    <div class="kart" data-mod="${eleman}">
    <img src="img/${eleman}.jpg">
    <h2>${eleman.replace('-', ' ')}</h2>
    <audio loop src="audio/${eleman}-sound.mp3"></audio>
    </div>
    `
    kokEleman.insertAdjacentHTML('beforeend', HTMLSablonu)
  })
  sesOlayları()
  renderBilgi()
}

//SES OLAYLARI EKLEYEN FONKSIYON
function sesOlayları() {
  const kartlar = document.querySelectorAll('.kart')
  kartlar.forEach((kartElemani) => {
    kartElemani.addEventListener('click', (olay) => {
      const kartSesi = kartElemani.querySelector('audio')

      if (kartSesi.paused) {
        //eğer duruyorsa
        kartSesi.play()
        kartElemani.classList.add('aktif')
        calanModlar.push(kartElemani.dataset.mod)
      } else {
        kartSesi.pause() //eğer çalıyorsa
        kartElemani.classList.remove('aktif')
        const modIndex = calanModlar.findIndex(
          (mod) => mod === kartElemani.dataset.mod
        )
        calanModlar.splice(modIndex, 1) //indexi eşit olanı çalanlardan kaldır
      }
      renderBilgi()
    })
  })
}

//ÇALANLARI GOSTEREN FONKSIYON
function renderBilgi() {
  const modlar = calanModlar.join(', ')
  bilgiEleman.innerHTML = `
  Şuan Çalıyor(${calanModlar.length}): ${modlar.replace('-', ' ')}
  `
}

renderKartlar()
renderBilgi()

//yontem2
/* const sesElemanlari = document.querySelectorAll("audio")
    sesElemanlari.forEach(sesElemani=>{
        const mod = sesElemani.dataset.mod
        if( !sesElemani.paused ) {
            console.log(mod);
        }
    }) */
