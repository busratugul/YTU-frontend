const modal = document.getElementById('myModal') //açılan div
const btn = document.getElementById('myBtn') //openModal butonu
const span = document.getElementsByClassName('close')[0] //X butonu

//MODALI ACAN CLICK EVENTI
btn.onclick = function () {
  modal.style.display = 'block'
}

//MODALI KAPATAN X BUTON EVENTI
span.onclick = function () {
  modal.style.display = 'none'
}

//EKRANIN HERHANGİ BİR YERİNE TIKLANDIGINDA MODALI KAPATAN EVENT
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

//ESC'YE BASILDIĞINDA MODALI KAPATAN EVENT
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27 || event.key === 'Escape') {
    event.target === modal
    modal.style.display = 'none'
  }
})
