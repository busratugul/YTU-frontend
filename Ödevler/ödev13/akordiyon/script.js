const bodyElement = document.querySelector('body')
let accordions = []

//BAŞLIĞI OLUŞTURUYORUZ
const header = document.createElement('h2')
header.innerText = 'Accordion'
bodyElement.append(header)

//İÇERİĞİ OLUŞTURUYORUZ
for (let button = 1; button < 4; button++) {
  const buttons = document.createElement('button')
  buttons.classList.add('accordion')
  buttons.textContent = `Section ${button}`
  accordions.push(buttons)

  const panels = document.createElement('div')
  panels.classList.add('panel')

  const pElements = document.createElement('p')
  pElements.innerHTML = `
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
`
  pElements.style.display = 'none'

  bodyElement.append(buttons)
  bodyElement.append(pElements)
}

//AKORDİYONLARIN AÇILIP KAPANMASINI KONTROL EDEN DÖNGÜ
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const content = this.nextElementSibling //p etiketi
    if (content.style.display === 'block') {
      content.style.display = 'none'
    } else {
      content.style.display = 'block'
    }
  })
}
