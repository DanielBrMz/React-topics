import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import BasicConcepts from './components/BasicConcepts';
import CrudApi from './components/CrudApi';
import SongSearch from './components/SongSearch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React Router</h1>
      <a href="https://reactrouter.com/web/guides/quick-start" target="_blanck">Documentación</a>
      <hr />
      <SongSearch/>
      <hr />
      <CrudApi/>
      <hr />
      <BasicConcepts/>
      <hr />
    </div>
  ); 
}

export default App

{/*<div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </div>*/}
