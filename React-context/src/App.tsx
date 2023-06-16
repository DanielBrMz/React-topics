import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'
import CrudApi from './components/CrudApi'
import { CrudProvider } from './context/CrudContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>React Context Api</h1>
      <a href="https://reactjs.org/docs/context.html" target="_blank">Documentación</a>
      <hr />
      <CrudProvider>
        <CrudApi/>
      </CrudProvider>
      <hr />
      <MyPageContext/>
      <hr />
      <MyPage/>
      <hr />
    </div>
  )
}

export default App
