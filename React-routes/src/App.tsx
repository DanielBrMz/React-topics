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

export default App;
