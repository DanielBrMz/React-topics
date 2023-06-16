import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, HashRouter, Link} from 'react-router-dom'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import ConceptsMenu from './ConceptsMenu'
import User from '../pages/User'
import Products from '../pages/Products'
import ReactTopics from '../pages/ReactTopics'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import PrivateRoute from './PrivateRoute'

const BasicConcepts = (): JSX.Element => {
  return (
    <div>
        <h2>Hash Router</h2>
        <HashRouter>
          <ConceptsMenu/>
        </HashRouter>
        <hr /> 
        <h2>Conceptos básicos</h2>
        <Router>
          <ConceptsMenu/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/usuario/:username/:age' element={<User/>}/>
              <Route path='/productos' element={<Products/>}/>
              <Route path='/acerca' element={<Navigate to='/about'/>}/>
              <Route path='/contacto' element={<Navigate to='/contact'/>}/>
              <Route path='/react/*' element={<ReactTopics/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/dashboard' element={<PrivateRoute component={<Dashboard/>}/>}/>
              <Route path='/*' element={<Error404/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default BasicConcepts