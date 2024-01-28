//temel gerekli bileşenler oluşturuluyor
const api_url = 'http://api.open-notify.org/astros.json'
const gridElemani = document.querySelector('.kutu')
const azSiralaButonu = document.querySelector('#az-sirala')
const zaSiralaButonu = document.querySelector('#za-sirala')
const yukleniyorKutusu = document.querySelector('#yukleniyor-kutusu')
const uzaydakiKisiler = []

//api  kaynağından gelen veriler çekiliyor
fetch(api_url)
  .then((yanit) => yanit.json()) //javascript objesine ceviriyor. json() diyo ama js yapıyor.
  .then((veri) => {
    //console.log(veri)
    uzaydakiKisiler.push(...veri.people)
    kisileriGoster()
    yukleniyorKutusu.remove()
  })
  .catch((hata) => {
    console.log(hata.message)
    yukleniyorKutusu.innerHTML = `<span class="alert alert-danger"> Veriler yüklenirken hata oluştu.Lütfen daha sonra tekrar deneyiniz. </span>`
  })

//kişileri uida gösteren ana fonksiyon
function kisileriGoster() {
  //öncelikle kutu içerisinde değer varsa temizle
  if (uzaydakiKisiler) {
    gridElemani.innerHTML = ''
  }
  uzaydakiKisiler.forEach((eleman) => {
    renderPerson(eleman)
  })
}

//kisileri tek tek ekleyen
//bir html elementinin kendine bir şey eklemek istersek
function renderPerson(kisi) {
  const HTML = `
    <div class="col-sm-4">
    <div class="card">
    <div class="card-body">${kisi.name}</div>
    </div>
    </div>
    `
  gridElemani.insertAdjacentHTML('beforeend', HTML)
}

function sirala(tip = 'A-Z') {
  if (tip === 'A-Z') {
    uzaydakiKisiler.sort((ilkObje, ikinciObje) =>
      ilkObje.name.localeCompare(ikinciObje.name, 'tr-TR')
    )
  }
  if (tip === 'Z-A') {
    uzaydakiKisiler.sort((ilkObje, ikinciObje) =>
      ikinciObje.name.localeCompare(ilkObje.name, 'tr-TR')
    )
  }
}

azSiralaButonu.addEventListener('click', (event) => {
  if (event.currentTarget.classList.contains('active')) return
  zaSiralaButonu.classList.remove('active')
  sirala('A-Z')
  kisileriGoster()
  event.currentTarget.classList.toggle('active') //event.currentTarget
})

zaSiralaButonu.addEventListener('click', (event) => {
  if (event.currentTarget.classList.contains('active')) return
  azSiralaButonu.classList.remove('active') //diğer butonu pasif yap
  sirala('Z-A')
  kisileriGoster()
  event.currentTarget.classList.toggle('active')
})
