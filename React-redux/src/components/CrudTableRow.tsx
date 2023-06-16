import React from 'react'
import { SoccerPlayers } from '../ts/interfaces/global_interfaces';

const CrudTableRow = ({el, setDataToEdit, deleteData}: {el: SoccerPlayers, setDataToEdit: (dataToEdit: SoccerPlayers)=>void, deleteData: (id: number)=>unknown}) => {
    const {id,name,position, team} = el;
  
  return (
    <tr>
        <td>{name}</td>
        <td>{position}</td>
        <td>{team}</td>
        <td>
            <button onClick={()=>setDataToEdit(el)}>Editar</button>
            <button onClick={()=>deleteData(id as number)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow;
