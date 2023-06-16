import React, { useState } from 'react';
import CrudForm from './CrudForm';
import {Frameworks} from '../ts/interfaces/global_interfaces';
import CrudTable from './CrudTable';

const initialDb: Frameworks[] = [
  {id: 1, name: 'React', version: '17.0.2', url: 'https://reactjs.org/'},
  {id: 2, name: 'Angular', version: '12.0.0', url: 'https://angular.io/'},
  {id: 3, name: 'Vue', version: '3.0.0', url: 'https://v3.vuejs.org/'},
  {id: 4, name: 'Svelte', version: '3.0.0', url: 'https://svelte.dev/'},
  {id: 5, name: 'Ember', version: '3.0.0', url: 'https://emberjs.com/'},
  {id: 6, name: 'Backbone', version: '1.0.0', url: 'https://backbonejs.org/'},
  {id: 7, name: 'Meteor', version: '1.0.0', url: 'https://www.meteor.com/'},
  {id: 8, name: 'Polymer', version: '3.0.0', url: 'https://polymer-project.org/'},
  {id: 9, name: 'Aurelia', version: '1.0.0', url: 'https://aurelia.io/'},
  {id: 10, name: 'Knockout', version: '3.0.0', url: 'https://knockoutjs.com/'},
  {id: 11, name: 'Dojo', version: '1.0.0', url: 'https://dojo.io/'},
  {id: 12, name: 'Mithril', version: '1.0.0', url: 'https://mithril.js.org/'},
  {id: 13, name: 'Elm', version: '0.19.0', url: 'https://elm-lang.org/'},
  {id: 14, name: 'Riot', version: '4.0.0', url: 'https://riot.js.org/'},
  {id: 15, name: 'Preact', version: '10.0.0', url: 'https://preactjs.com/'},
  {id: 16, name: 'Inferno', version: '7.0.0', url: 'https://infernojs.org/'},
  {id: 17, name: 'Cappuccino', version: '0.9.9', url: 'http://cappuccino.org/'},
  {id: 18, name: 'Ext JS', version: '6.0.0', url: 'https://www.sencha.com/products/extjs/'},
  {id: 19, name: 'jQuery', version: '3.0.0', url: 'https://jquery.com/'},
  {id: 20, name: 'jQuery Mobile', version: '1.0.0', url: 'https://jquerymobile.com/'},
  {id: 21, name: 'jQuery UI', version: '1.0.0', url: 'https://jqueryui.com/'}
];

export const CrudApp = () => {
  const [db, setDb] = useState<Frameworks[]>(initialDb);
  const [dataToEdit, setDataToEdit] = useState<Frameworks | null>(null);

  const text = {
    name: "Nombre",
    feature1: "Versión",
    feature2: "URL"
  }

  const createData = (data: Frameworks) => {
    data.id = db[db.length-1].id + 1;
    setDb([...db, data]);
  }

  const updateData = (data: Frameworks) => {
    let newData: Frameworks[] = db.map((el: Frameworks) => el.id === data.id ? data : el);
    setDb(newData);
  }

  const deleteData = (id: number) => {
    let isDelete: boolean = window.confirm(`¿Estás seguro de eliminar el registro ${id}?`);
    if (isDelete) {
      let newData = db.filter((el: Frameworks) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  }

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
      <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} text={text}/>
      <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} text={text}/>
      </article>
    </div>
  )
}
 

export default CrudApp; 