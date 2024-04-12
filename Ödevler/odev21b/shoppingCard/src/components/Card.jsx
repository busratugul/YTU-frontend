function Card({ card, emptyCard }) {
  const total = card.reduce((acc, item) => acc + item.price, 0)
  if (card.lenght === 0) return
  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {card.map((item) => {
          return (
            <li className="mt-2 flex justify-between" key={item.id}>
              <span>{item.name}</span> <span>{item.price}</span>
            </li>
          )
        })}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl ">Toplam: {total} </p>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600 transition-all mt-4"
        onClick={emptyCard}
      >
        Sepeti Boşalt
      </button>
    </div>
  )
}

export default Card
