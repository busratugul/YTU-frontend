import React from 'react'
import ReactDOM from 'react-dom/client'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const handleClick = () => {
  const cards = document.querySelectorAll('.card')
  const title = document.querySelector('.title')
  cards.forEach((item) => (item.style.visibility = 'hidden'))
  title.innerText = '0 Birthdays Today'
}
root.render(
  <>
    <p className="title"> 5 Birthdays Today </p>
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 />
    <Card5 />
    <button id="clearAllBtn" onClick={handleClick}>
      Clear All
    </button>
  </>
)
