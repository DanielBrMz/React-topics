import React, { useState, useEffect } from 'react'
import {Frameworks} from '../ts/interfaces/global_interfaces';


const initialForm: Frameworks = {
    id: 0,
    name: '',
    version: '',
    url: ''
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit, text}: any) => {
  const [form, setForm] = useState<Frameworks>(initialForm)
  
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
    if(!form.name || !form.version || !form.url){
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
            <input type="text" name='version' placeholder={text.feature1} onChange={handleChange} value={form.version}/>
            <input type="text" name='url' placeholder={text.feature2} onChange={handleChange} value={form.url}/>
            <input type="submit" value='Enviar'/>
            <input type="reset" value='Limpiar' onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm;