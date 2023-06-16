import React from 'react'
import { SoccerPlayers } from '../ts/interfaces/global_interfaces';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const CrudTableRow = ({el, setDataToEdit, deleteData}: {el: SoccerPlayers, setDataToEdit: React.Dispatch<React.SetStateAction<SoccerPlayers | null>>, deleteData: (id: number) => unknown}) => {
  const {id,name,position,team} = el;
  let navigate: NavigateFunction = useNavigate();
  
  const handleEdit = (): void => {
    setDataToEdit(el);
    navigate(`/soccerplayers/edit/${id}`);
  }
  
  return (
    <tr>
        <td>{name}</td>
        <td>{position}</td>
        <td>{team}</td>
        <td>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={()=>deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow;
