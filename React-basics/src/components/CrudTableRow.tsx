import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}: any) => {
    const {id,name,version,url} = el,
     {position, team} = el;
  
  return (
    <tr>
        <td>{name}</td>
        <td>{version || position}</td>
        <td>{url || team}</td>
        <td>
            <button onClick={()=>setDataToEdit(el)}>Editar</button>
            <button onClick={()=>deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow;
