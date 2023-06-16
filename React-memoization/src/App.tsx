import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Memoization</h1>
      <hr />
      <h2>Teoría</h2>
      <h3><a href="https://reactjs.org/docs/react-api.html#reactmemo">Memo</a></h3>
      <ul>
        <li>Se encarga de memorizar un componente</li>
        <li>Lo vuelve a memorizar al momento de que sus <b>props</b> cambientes.</li>
        <li>Evita re-renderizados</li>
        <li>Hay que evitarlo en la medida de lo posible, pues podría ser más
           costosa la tarea de memorización que el re-renderizado del componente.</li>
        <li>
          Usalo cuando:
          <ul>
            <li>Tenemos muchos renderizados en una lista</li>
            <li>Llamamos datos de APIs</li>
            <li>Un componenete se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ul>
        </li>
      </ul>
      <hr />
      <h3><a href="https://reactjs.org/docs/hooks-reference.html#usecallback">useCallback</a></h3>
      <ul>
        <li>Memoriza una función</li>
        <li>Úsalo siempre que se pase una <b>prop</b> a un componente memorizado</li>
        <li>Úsalo siempre que se pase una función como parámetro de un efecto</li>
      </ul>
      <hr />
      <h3><a href="https://reactjs.org/docs/hooks-reference.html#usememo">useMemo</a></h3>
      <ul>
        <li>Memoriza un valor calculado, es decir, el resultado de una función</li>
        <li>Genera propiedades computadas</li>
        <li>Úsalo en procesos computados</li>
      </ul>
      <hr />
      <Counter/>
      <hr />
    </div>
  )
}

export default App
