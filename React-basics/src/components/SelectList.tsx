import React from 'react'
import { useFetch } from '../hooks/useFetch';
import Loader from './Loader';
import Message from './Message';

const SelectList = ({title, url, handleChange}: any) => {
  const {data, error, loading} = useFetch(url);
  
  if(error){
      return <Message msg={`Error ${error.status}: ${error.message}`} bgColor={"#dc3545"}/>
  }
  if(!data) return null;

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];
  return (
    <>  
        <label htmlFor={id}>{label}</label>
        {loading && <Loader/>}
        <select name={id} id={id} onChange={handleChange}>
            <option value="">Seleccione un {label}</option>
            {data && options.map((el: string )=><option value={el}>{el}</option>)}
        </select>
    </>
  )
}

export default SelectList;