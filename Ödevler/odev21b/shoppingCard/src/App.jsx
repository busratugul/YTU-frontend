import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import Card from './components/Card'

function App() {
  const [card, setCard] = useState([])

  const emptyCard = () => {
    setCard([])
  }
  return (
    <div className="container mx-auto p-4">
      <Header card={card} />
      <Products card={card} setCard={setCard} />
      <Card card={card} emptyCard={emptyCard} />
    </div>
  )
}

export default App
