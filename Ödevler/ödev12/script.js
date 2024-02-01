let ogrenciler = [
  { ad: 'Ahmet', soyad: 'Yılmaz', yas: 15 },
  { ad: 'Ayşe', soyad: 'Kaya', yas: 30 },
  { ad: 'Mustafa', soyad: 'Demir', yas: 22 },
  { ad: 'Fatma', soyad: 'Arslan', yas: 28 },
  { ad: 'Mehmet', soyad: 'Kurt', yas: 17 },
  { ad: 'Zeynep', soyad: 'Çelik', yas: 24 },
  { ad: 'Emre', soyad: 'Aydın', yas: 29 },
  { ad: 'Seda', soyad: 'Ekinci', yas: 18 },
  { ad: 'Cem', soyad: 'Şahin', yas: 17 },
  { ad: 'Gizem', soyad: 'Yıldırım', yas: 27 },
]

//DOM ELEMANLARI
const bodyElemani = document.querySelector('body')
const olElemani = document.createElement('ol')
const buton1 = document.getElementById('buton1')
const buton2 = document.getElementById('buton2')
const buton3 = document.getElementById('buton3')
const buton4 = document.getElementById('buton4')
const buton5 = document.getElementById('buton5')
const buton6 = document.getElementById('buton6')

//UI RENDERI(ÖĞRENCİ BİLGİLERİNİ SIRALIYORUZ)
ogrencileriSirala(ogrenciler)

function ogrencileriSirala(arr) {
  arr.forEach((ogrenci) => {
    const liElemani = document.createElement('li')
    liElemani.innerHTML = `
    <p style="display:inline">${ogrenci.ad} ${ogrenci.soyad}</p>
    <span>${ogrenci.yas}</span>
    `
    olElemani.append(liElemani)
    bodyElemani.append(olElemani)
  })
  return arr
}

//YENİ ÖĞRENCİ EKLEME FONKSİYONU
function yeniOgrenciEkle() {
  const yeniAd = prompt('Yeni öğrencinin adını giriniz')
  const yeniSoyad = prompt('Yeni öğrencinin soyadını giriniz')
  const yeniYas = prompt('Yeni öğrencinin yaşını giriniz')

  //Listeyi boşaltıyoruz.
  olElemani.innerHTML = ''
  //UI'ı tekrar render ediyoruz.
  ogrenciler = ogrencileriSirala([
    ...ogrenciler,
    { ad: yeniAd, soyad: yeniSoyad, yas: yeniYas },
  ])
}

//ÖĞRENCİ SİLME FONKSİYONU
function ogrenciSil() {
  //Girilen sıra numarasının bir eksiği index olduğu için hesaplama yapıyoruz
  const silinenOgrenciIdx =
    parseInt(prompt('Silinecek öğrencinin sıra numarasını giriniz. 1-??')) - 1
  //listeyi boşaltıyoruz
  olElemani.innerHTML = ''
  //listeden verilen indeksteki öğrenciyi siliyoruz
  ogrenciler.splice(silinenOgrenciIdx, 1)
  //UI'ı tekrar render ediyoruz
  ogrencileriSirala(ogrenciler)
}

//MEVCUT ÖĞRENCİ BİLGİLERİNİ GÜNCELLEME FONKSİYONU
function ogrenciGuncelle() {
  //Girilen sıra numarasının bir eksiği index olduğu için hesaplama yapıyoruz
  const guncellenecekOgrenciIdx =
    parseInt(prompt('Güncellenecek öğrencinin sıra numarasını giriniz. 1-??')) -
    1
  const guncelAd = prompt('Yeni öğrenci adını giriniz.')
  const guncelSoyad = prompt('Yeni öğrenci soyadını giriniz.')
  //listeyi boşaltıyoruz
  olElemani.innerHTML = ''
  //listeyi yeni bilgilerle güncelliyoruz
  ogrenciler.splice(guncellenecekOgrenciIdx, 1, {
    ...ogrenciler[guncellenecekOgrenciIdx],
    ad: guncelAd,
    soyad: guncelSoyad,
  })
  //UI'ı tekrar render ediyoruz
  ogrencileriSirala(ogrenciler)
}

//ÖĞRENCİLERİ ADA GÖRE ALFABETİK SIRALAMA FONKSİYONU
function alfabetikSirala() {
  olElemani.innerHTML = ''
  ogrencileriSirala(ogrenciler.sort((a, z) => a.ad.localeCompare(z.ad)))
}

//RASTGELE ÖĞRENCİ SEÇME
function randomOgrenciSec() {
  //utility function - random number
  function randomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  //Random sayıya enk gelen öğrenciyi indeksliyoruz.
  const randomOgrenci = ogrenciler[randomNumber(0, ogrenciler.length - 1)]

  alert(` Rastgele Bir Öğrenci 
  Ad: ${randomOgrenci.ad}  Soyad: ${randomOgrenci.soyad} Yaş: ${randomOgrenci.yas}`)
}

//18 YAŞINDAN BÜYÜK ÖĞRENCİLERİ LİSTELEME FONKSİYONU
function arti18() {
  ogrenciler.filter((ogrenci) => ogrenci.yas > 18)
  //listeyi boşaltıyoruz
  olElemani.innerHTML = ''
  //tüm işlemlerin bu liste üzerinde yapılabilmesı için tekrar atama yapıyoruz
  ogrenciler = ogrenciler.filter((ogrenci) => ogrenci.yas < 18)
  //UI'ı tekrar render ediyoruz
  ogrencileriSirala(ogrenciler)
}

//EVENTLAR
buton1.addEventListener('click', yeniOgrenciEkle)
buton2.addEventListener('click', ogrenciSil)
buton3.addEventListener('click', ogrenciGuncelle)
buton4.addEventListener('click', alfabetikSirala)
buton5.addEventListener('click', randomOgrenciSec)
buton6.addEventListener('click', arti18)
