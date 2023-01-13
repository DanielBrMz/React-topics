import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ConceptsMenu = (): JSX.Element => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menú con enlaces html (no recomendado)</span>
          <a href="/">Home</a>
          <a href="/about">Acerca</a>
          <a href="/contact">Contacto</a>
        </li>
        <li>
          <span>Componente Link:</span>
          <Link to="/">Home</Link>
          <Link to="/about">Acerca</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/noxd">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink:</span>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about" end>Acerca</NavLink>
          <NavLink to="/contact" end>Contacto</NavLink>
        </li>
        <li>
          <span>Parametros</span>
          <Link to="/usuario/Daniel/18">Daniel</Link>
          <Link to="/usuario/DrParion/24">DrPasion</Link>
        </li>
        <li>
          <span>Parametros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li> 
          <span>Redirecciones: </span>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>Rutas anidadas: </span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas privadas</span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">DashBoard</Link>
        </li>
      </ol>      
    </nav>
  )
}

export default ConceptsMenu