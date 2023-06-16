import React, { useState } from 'react';
import { Track } from '../ts/interfaces/global_interfaces';

const initialForm: Track = {
    artist: '',
    song: ''
}

const SongForm = ({handleSearch}: any) => {
  const [form, setForm] = useState<Track>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
  }

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): unknown => {
        e.preventDefault();
        
        if(!form.artist || !form.song){
            alert('Datos incompletos');
            return;
        }
        handleSearch(form);
        setForm(initialForm);   
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='artist' onChange={handleChange} placeholder='Nombre del intérprete' value={form.artist}/>
            <input type="text" name='song' onChange={handleChange} placeholder='Nombre de la canción' value={form.song}/>
            <button type='submit'>Buscar</button>
        </form>
    </div>
  )
}

export default SongForm;