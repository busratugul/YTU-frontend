import './App.css'
import Tour from './Tour.jsx'
import { toursAll } from './api.js'

function App() {
  console.log(toursAll)
  return (
    <div className="container">
      <h2 className="title">Our Tours</h2>
      <div className="title-underline"></div>
      <div className="tours">
        <Tour/>
      </div>
    </div>
  )
}

export default App
