import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import SongSearch from './components/SongSearch';
import SelectsAnidados from './components/SelectsAnidados';
import ContactForm from './components/ContactForm';
import Modals from './components/Modals';

function App() {
  return (
    <div className="App">
      <h1>Practicas con React</h1>
        <hr />
        <Modals/>
        <hr />
        <ContactForm/>
        <hr />
        <SelectsAnidados/>
        <hr/> 
        <SongSearch/>
        <hr/>
        <CrudApi/>
        <hr/>
        <CrudApp/>
    </div>
  );
}

export default App;
