import { veriCek } from './api.js'
import { renderHarita, renderIsaretci } from './harita.js'

const kokEleman = document.querySelector('#root')

async function renderBilgi() {
  const bilgi = await veriCek() //zaman
  kokEleman.insertAdjacentHTML(
    'beforeend' /* `
    <p> Enlem: ${bilgi.enlem} </p>
    <p> Boylam: ${bilgi.boylam} </p>
    ` */,
    `
    <div id="map"></div>
    `
  )
  const map = renderHarita(bilgi)
  renderIsaretci(bilgi, map)
}

renderBilgi()
