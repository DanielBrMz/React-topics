import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}> 
      <div className="App" style={{textAlign: "center"}}>
        <h1>React Redux</h1>
        <hr /> 
        <Counter/> 
        <hr />
      </div>
    </Provider>
    
  )
}

export default App
