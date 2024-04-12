import React from 'react'
import CartIcon from './CartIcon'

function Header({ card }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold">
        React ve Tailwind CSS Sepet Uygulaması
      </h1>
      <CartIcon card={card} />
    </div>
  )
}

export default Header
