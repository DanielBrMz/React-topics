import React, { useContext } from 'react'
import { SoccerPlayers } from '../ts/interfaces/global_interfaces';
import CrudContext from '../context/CrudContext';

const CrudTableRow = ({el}: {el: SoccerPlayers}): JSX.Element => {
    const {setDataToEdit, deleteData} = useContext(CrudContext);
    const {id,name, position, team} = el;
  
  return (
    <tr>
        <td>{name}</td>
        <td>{position}</td>
        <td>{team}</td>
        <td>
            <button onClick={()=>setDataToEdit(el)}>Editar</button>
            <button onClick={()=>deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow;
