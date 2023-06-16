import React from 'react'
import { Link, Route, Routes, useParams} from 'react-router-dom'

const Topic = (): JSX.Element => {
    const {topic}= useParams();

    return (
        <div>
            <h4>{topic}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ratione sapiente architecto a error dolore qui neque, 
                nesciunt minima provident cupiditate, expedita, laboriosam 
                corrupti numquam quas sequi fugiat culpa corporis omnis.</p>
        </div>
    );
}

const ReactTopics = (): JSX.Element => {

  return (
    <div>
        <h3>Temas de React.js</h3>
        <ul>
            <li>
                <Link to="/react/jsx">JSX</Link>
            </li>
            <li>
                <Link to="/react/props">Props</Link>
            </li>
            <li>
                <Link to="/react/state">Estado</Link>
            </li>
            <li>
                <Link to="/react/components">Componentes</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/:topic" element={<Topic/>}/>
        </Routes>
    </div>
  )
}

export default ReactTopics