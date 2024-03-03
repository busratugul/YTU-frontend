const URL = '/tours.json'
let toursAll = []

const getData = async () => {
  const response = await fetch(URL)
  const tours = await response.json()
  toursAll = toursAll.push(...tours)
}
getData()

export { toursAll }
