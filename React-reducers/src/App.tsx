import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>useReducer</h1>
      <hr />
      <ShoppingCart/>
      <hr />
      <hr />
    </div>
  )
}

export default App
