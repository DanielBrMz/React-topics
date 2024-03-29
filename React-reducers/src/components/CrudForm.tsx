import React, { useState, useEffect } from 'react'
import {SoccerPlayers} from '../ts/interfaces/global_interfaces';
import { IText } from '../ts/types/global_types';


const initialForm: SoccerPlayers= {
    id: 0,
    name: '',
    position: '',
    team: ''
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit, text}: {createData:(data: SoccerPlayers)=>void,updateData:(data: SoccerPlayers)=>void, dataToEdit: any, setDataToEdit: (dataToEdit: SoccerPlayers | null)=>void, text: IText  }): JSX.Element => {
  const [form, setForm] = useState<SoccerPlayers>(initialForm)
  
  useEffect(() => {
    if(dataToEdit){
        setForm(dataToEdit)
    }else{
        setForm(initialForm)
    } 
  }, [dataToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!form.name || !form.position || !form.team){
        alert('Datos incompletos')
        return;
    }
    if(form.id === 0){
        createData(form)
    }else{
        updateData(form)
    }
    handleReset();
  }

  const handleReset = (e?: React.MouseEvent<HTMLInputElement>) => {
    setForm(initialForm)
    setDataToEdit(null)
  }

  return (
    <div>
        <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Nombre' onChange={handleChange} value={form.name}/>
            <input type="text" name='version' placeholder={text.feature1} onChange={handleChange} value={form.position}/>
            <input type="text" name='url' placeholder={text.feature2} onChange={handleChange} value={form.team}/>
            <input type="submit" value='Enviar'/>
            <input type="reset" value='Limpiar' onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm;