const rootEl = document.querySelector('#root')

const dataArray = [
  {
    id: 1,
    name: 'Bertie Yates',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    age: 32,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id: 3,
    name: 'Larry Little',
    age: 36,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    age: 34,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  },
  {
    id: 5,
    name: 'Lola Gardner',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },
]

//UI RENDER FONKSIYONU
function renderUI() {
  rootEl.innerHTML = ''

  //HEADER
  const header = document.createElement('h2')
  header.innerText = `${dataArray.length} Birthdays today`
  header.style.fontWeight = '300'
  rootEl.append(header)

  //LIST
  dataArray.forEach((data) => {
    const personCard = `
        <div class="card">
       <img src="${data.image}">
       <div><h5>${data.name}</h5>
       <p>${data.age} years</p></div>
      </div>
      `
    rootEl.insertAdjacentHTML('beforeend', personCard)
  })

  //BUTTON
  if (dataArray.length) {
    const btnHTML = `<button id="clearAllBtn">Clear All</button>`
    rootEl.insertAdjacentHTML('beforeend', btnHTML)
    document.querySelector('#clearAllBtn').addEventListener('click', () => {
      dataArray.splice(0, dataArray.length)

      renderUI()
    })
  }
}

renderUI()
